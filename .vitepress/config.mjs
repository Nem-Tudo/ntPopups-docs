import { defineConfig } from 'vitepress'

import sidebar from '../src2/.vitepress/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: './src2',
  title: "ntPopups",
  description: "ntPopups documentation",
  head: [["link", { rel: "icon", href: "https://cdn.nemtudo.me/f/nemtudo/MjAyNS8xMC8yNy9JTUFHRS8yMV81MV8yMl9fMTc2MTYxMjY4MjUzNy04ODgyOTcwNQ.webp" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Demo examples', link: 'https://ntpopups.nemtudo.me/demo' },
    ],
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nem-Tudo/ntPopups' },
      { icon: 'discord', link: 'https://discord.gg/nemtudo' },
      { icon: 'instagram', link: 'https://instagram.com/_nemtudo_' },
    ]
  }
})