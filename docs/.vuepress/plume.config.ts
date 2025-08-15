import type { ThemeConfig } from 'vuepress-theme-plume'
import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { enNotes, zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/Kazuiha.jpg',

  profile: {
    avatar: '/Kazuiha.jpg',
    name: 'Kazuiha',
    description: 'Kazuiha',
    location: 'Beijing, China',
    organization: 'Kazuiha',
  },

  social: [
    { icon: 'github', link: 'https://github.com/Kazuiha/Kazuiha' },
  ],
  navbarSocialInclude: ['github'],

  footer: false,
  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },

  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
    },
  },
  autoFrontmatter: { exclude: ['**/*.snippet.*'] },

  bulletin: {
    layout: 'top-right',
    lifetime: 'always',
    // title: '🎉 公告 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/guide/features/bulletin/',
  },
}) as ThemeConfig
