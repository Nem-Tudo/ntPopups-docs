# Estágio de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build do VitePress
RUN npm run docs:build

# Estágio de produção
FROM nginx:alpine

# Copiar build do VitePress para o nginx
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 55004
EXPOSE 55004

CMD ["nginx", "-g", "daemon off;"]