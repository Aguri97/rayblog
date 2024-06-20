import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "个人空间",
  description: "一个平凡的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '面试', link: 'note/html' },
      { text: '工具', link: 'note/html' },
      { text: '教程', link: 'note/html' }
    ],

    sidebar: [
      {
        text: '前端面试',
        items: [
          { text: 'HTML', link: 'note/html' },
          { text: 'CSS', link: 'note/css' },
          { text: '网络', link: 'note/network' },
          { text: '浏览器', link: 'note/browser' },
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: [2, 6],
      label: '目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ghostking426/rayblog' }
    ]
  }
})
