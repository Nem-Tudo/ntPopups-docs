import { defineConfig } from 'vitepress'

import sidebar from '../src/.vitepress/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "ntPopups",
  description: "ntPopups documentation",
  head: [["link", { rel: "icon", href: "https://github.com/Nem-Tudo/ntPopups/blob/main/icon.png?raw=true" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Live examples', link: 'https://ntpopups.nemtudo.me' },
    ],

    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nem-Tudo/ntPopups' },
      { icon: 'discord', link: 'https://discord.gg/nemtudo' },
      { icon: 'instagram', link: 'https://instagram.com/_nemtudo_' },
    ]
  }
})