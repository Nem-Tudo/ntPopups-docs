import re
import os
from pathlib import Path
from typing import List, Dict, Tuple

class ReadmeToVitePress:
    def __init__(self, readme_path: str, output_dir: str = "docs"):
        self.readme_path = readme_path
        self.output_dir = output_dir
        self.pages = []
        
    def slugify(self, text: str) -> str:
        """Converte texto para slug válido para nome de arquivo"""
        # Remove caracteres especiais e emojis
        text = re.sub(r'[^\w\s-]', '', text.lower())
        # Substitui espaços por hífens
        text = re.sub(r'[-\s]+', '-', text)
        return text.strip('-')

    def remove_markdown(self, text: str) -> str:
        """Remove markdown bold, italic, inline code e links para uso na sidebar"""
        # Remove **bold**, *italic*
        text = re.sub(r'(\*\*|__|\*|_)(.*?)\1', r'\2', text)
        # Remove `inline code`
        text = re.sub(r'`(.*?)`', r'\1', text)
        # Remove links [text](url) - mantém apenas o texto
        text = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', text)
        # Remove markdown de cabeçalho
        text = re.sub(r'^\s*#+\s*', '', text)
        # Remove HTML tags simples (e.g., <br>)
        text = re.sub(r'<[^>]*>', '', text)
        return text.strip()
    
    def escape_js_string(self, text: str) -> str:
        """Escapa aspas simples e barras invertidas para uso seguro em strings JS."""
        # Substitui \ por \\
        text = text.replace('\\', '\\\\')
        # Substitui ' por \'
        text = text.replace("'", "\\'")
        return text
    
    def extract_sections(self, content: str) -> List[Dict]:
        """Extrai seções do README baseado em títulos ## e ###"""
        sections = []
        lines = content.split('\n')
        
        current_h2 = None
        current_h3 = None
        intro_content = []
        
        for i, line in enumerate(lines):
            # Detecta título de nível 2 (##)
            if line.startswith('## ') and not line.startswith('### '):
                # Salva h3 anterior se existir
                if current_h3:
                    current_h2['subsections'].append(current_h3)
                    current_h3 = None
                
                # Salva h2 anterior se existir
                if current_h2:
                    sections.append(current_h2)
                
                # Limpa o título removendo ##
                title = re.sub(r'^##\s+', '', line).strip()
                title_clean = self.remove_markdown(title)
                
                current_h2 = {
                    'title': title,
                    'title_clean': title_clean,
                    'slug': self.slugify(title_clean),
                    'content': [],
                    'subsections': []
                }
            
            # Detecta título de nível 3 (###)
            elif line.startswith('### '):
                # Salva h3 anterior se existir
                if current_h3:
                    current_h2['subsections'].append(current_h3)
                
                # Limpa o título removendo ###
                title = re.sub(r'^###\s+', '', line).strip()
                title_clean = self.remove_markdown(title)
                
                current_h3 = {
                    'title': title,
                    'title_clean': title_clean,
                    'slug': self.slugify(title_clean),
                    'content': [],
                    'parent_slug': current_h2['slug'] if current_h2 else None
                }
            
            # Título principal (ignora)
            elif line.startswith('# '):
                continue
            
            # Adiciona conteúdo
            else:
                if current_h3:
                    # Conteúdo da subseção
                    current_h3['content'].append(line)
                elif current_h2:
                    # Conteúdo da seção principal
                    current_h2['content'].append(line)
                else:
                    # Conteúdo de introdução
                    intro_content.append(line)
        
        # Salva última h3 se existir
        if current_h3:
            if current_h2: # Garantir que h2 existe
                current_h2['subsections'].append(current_h3)
        
        # Salva última h2 se existir
        if current_h2:
            sections.append(current_h2)
        
        # Adiciona seção de introdução se houver conteúdo
        if intro_content or not sections: # Adiciona seções mesmo que o conteúdo seja apenas o título #
            sections.insert(0, {
                'title': self.remove_markdown(lines[0].replace('#', '').strip()) if lines and lines[0].startswith('#') else 'Introduction',
                'title_clean': 'Introduction',
                'slug': 'index',
                'content': intro_content,
                'subsections': []
            })
        
        return sections
    
    def create_frontmatter(self, title: str, order: int = None) -> str:
        """Cria frontmatter para página VitePress"""
        frontmatter = "---\n"
        frontmatter += f"title: {title}\n"
        if order is not None:
            frontmatter += f"order: {order}\n"
        frontmatter += "---\n\n"
        return frontmatter
    
    def process_content(self, content: List[str], adjust_headers: bool = False) -> str:
        """
        Processa o conteúdo, ajusta cabeçalhos e corrige o erro de frontmatter
        SUBSTITUINDO linhas que contenham apenas '---' por '***' (para manter o separador visual).
        """
        processed = []
        
        for line in content:
            # Pula linhas vazias no início
            if not processed and not line.strip():
                continue

            # CORREÇÃO PARA ERRO DE VUE/VITEPRESS:
            # Substitui linhas que contenham APENAS '---' por '***' para evitar quebra de parsing
            # e manter o separador visual.
            if line.strip() == '---':
                line = '***' # Substitui por um separador válido que não confunde o parser
            
            # Ajusta níveis de título se necessário (#### vira ###, etc)
            if adjust_headers:
                if line.startswith('####'):
                    line = line[1:]  # Remove um # (#### -> ###)
                elif line.startswith('###') and not line.startswith('####'):
                    line = line[1:] # Remove um # (### -> ##)

            
            processed.append(line)
        
        return '\n'.join(processed).strip()

    def has_significant_content(self, content_lines: List[str]) -> bool:
        """Verifica se há conteúdo significativo (não apenas linhas vazias)"""
        # Filtra linhas vazias ou linhas que contêm apenas espaços
        content = [line.strip() for line in content_lines if line.strip()]
        # Se houver mais de uma linha ou uma linha não vazia, considera conteúdo significativo
        # A linha 0 geralmente é um cabeçalho ou metadado que pode ter sido removido
        return len(content) > 0
    
    def create_sidebar_config(self, sections: List[Dict]) -> str:
        """Cria configuração da sidebar para VitePress, removendo 'Overview' de seções sem conteúdo."""
        config = """export default {
    '/': [
"""
        
        for section in sections:
            # Remove markdown dos títulos da sidebar (items.[x].text)
            title_for_sidebar = self.remove_markdown(section['title'])
            escaped_title = self.escape_js_string(title_for_sidebar)

            if section['slug'] == 'index':
                config += f"        {{ text: '{escaped_title}', link: '/' }},\n"
            else:
                # Seção principal
                if section['subsections']:
                    # Tem subseções - cria grupo colapsável
                    config += f"        {{\n"
                    config += f"          text: '{escaped_title}',\n"
                    config += f"          collapsed: false,\n"
                    config += f"          items: [\n"
                    
                    # Verifica se a seção principal tem conteúdo para incluir o 'Overview'
                    # O 'Overview' corresponde ao conteúdo da seção principal (index.md)
                    if self.has_significant_content(section['content']):
                        # O link "Overview" usa um título fixo, não precisa de escape
                        config += f"            {{ text: 'Overview', link: '/{section['slug']}/' }},\n"
                    
                    # Adiciona subseções
                    for subsection in section['subsections']:
                        # Remove markdown e escapa o título da subseção
                        sub_title_for_sidebar = self.remove_markdown(subsection['title'])
                        escaped_sub_title = self.escape_js_string(sub_title_for_sidebar)
                        config += f"            {{ text: '{escaped_sub_title}', link: '/{section['slug']}/{subsection['slug']}' }},\n"
                    
                    config += f"          ]\n"
                    config += f"        }},\n"
                else:
                    # Sem subseções - link direto
                    config += f"        {{ text: '{escaped_title}', link: '/{section['slug']}/' }},\n"
        
        config += """    ]
}"""
        return config
    
    def convert(self):
        """Executa a conversão completa"""
        # Lê o arquivo README
        try:
            with open(self.readme_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except FileNotFoundError:
            print(f"❌ Erro: Arquivo '{self.readme_path}' não encontrado!")
            return
        
        # Extrai as seções
        sections = self.extract_sections(content)
        
        # Cria diretório de saída
        os.makedirs(self.output_dir, exist_ok=True)
        
        page_count = 0
        
        # Processa cada seção
        for i, section in enumerate(sections):
            # Define nome do arquivo para seção principal
            if section['slug'] == 'index':
                filepath = os.path.join(self.output_dir, 'index.md')
            else:
                # Cria diretório para a seção
                section_dir = os.path.join(self.output_dir, section['slug'])
                os.makedirs(section_dir, exist_ok=True)
                filepath = os.path.join(section_dir, 'index.md')
            
            # Cria conteúdo da página principal
            page_content = self.create_frontmatter(section['title_clean'], i + 1)
            # Use o título original, não o clean, para manter emojis/ícones no corpo
            page_content += f"# {section['title']}\n\n" 
            # O adjust_headers agora faz: #### -> ###, ### -> ##
            page_content += self.process_content(section['content'], adjust_headers=True) 
            
            # Salva arquivo da seção principal
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(page_content)
            
            print(f"✓ Criado: {filepath}")
            page_count += 1
            
            # Processa subseções (###)
            for j, subsection in enumerate(section['subsections']):
                # Define caminho da subseção
                sub_filepath = os.path.join(
                    self.output_dir, 
                    section['slug'], 
                    f"{subsection['slug']}.md"
                )
                
                # Cria conteúdo da subpágina
                sub_content = self.create_frontmatter(subsection['title_clean'])
                # O título da subpágina deve ser # para o VitePress
                sub_content += f"# {subsection['title']}\n\n" 
                # O adjust_headers agora faz: #### -> ###, ### -> ##
                sub_content += self.process_content(subsection['content'], adjust_headers=True)
                
                # Salva arquivo da subseção
                with open(sub_filepath, 'w', encoding='utf-8') as f:
                    f.write(sub_content)
                
                print(f"  ↳ Subpágina: {sub_filepath}")
                page_count += 1
        
        # Cria configuração da sidebar
        sidebar_config = self.create_sidebar_config(sections)
        sidebar_path = os.path.join(self.output_dir, '.vitepress', 'sidebar.js')
        
        os.makedirs(os.path.dirname(sidebar_path), exist_ok=True)
        
        with open(sidebar_path, 'w', encoding='utf-8') as f:
            f.write(sidebar_config)
        
        print(f"\n✓ Criado: {sidebar_path}")
        print(f"\n✅ Conversão concluída! {page_count} páginas criadas em {len(sections)} seções.")
        print(f"\n📁 Estrutura gerada em: {self.output_dir}/")
        
        return sections


def main():
    """Função principal"""
    import sys
    
    # Argumentos de linha de comando
    if len(sys.argv) < 2:
        print("Uso: python script.py <caminho-do-readme.md> [diretorio-saida]")
        print("\nExemplo:")
        print("  python script.py README.md docs")
        return
    
    readme_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "docs"
    
    # Verifica se arquivo existe
    if not os.path.exists(readme_path):
        print(f"❌ Erro: Arquivo '{readme_path}' não encontrado!")
        return
    
    # Executa conversão
    converter = ReadmeToVitePress(readme_path, output_dir)
    converter.convert()
    
    print("\n📝 Próximos passos:")
    print("1. Configure o VitePress no diretório de saída")
    print("2. Importe a sidebar config no seu .vitepress/config.js:")
    print(f"   import sidebar from './sidebar.js'")
    print("3. Use no themeConfig: { sidebar }")


if __name__ == "__main__":
    main()