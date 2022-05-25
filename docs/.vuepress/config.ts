import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: 'Vant Adapted',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        title: '开发指南',
        path: '/dev/install',
        collapsable: false,
        sidebarDepth: 1,
        children: ['/dev/install'],
      },
      {
        title: '组件',
        path: '/components/button',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/components/button',
          '/components/icon',
          '/components/popup',
        ],
      },
    ],
  },
})
