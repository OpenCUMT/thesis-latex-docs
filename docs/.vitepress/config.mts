import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "thesis-latex wiki",
  description: "A helpful wiki for CUMT thesis-latex",
  base: '/thesis-latex-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      { 
        text: '简介', 
        link: '/introduction' },
      {
        
        text: '使用',
        items: [
          { 
            text: '快速开始', 
            link: '/quick-start' 
          }
        ]
      },
      {
        text: '更新日志',
        link: '/changelog'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coolwindX/thesis-latex-docs' }
    ]
  }
})
