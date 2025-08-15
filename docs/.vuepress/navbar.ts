import type { ThemeNavItem } from 'vuepress-theme-plume'
import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    link: '/notes/theme/guide/quick-start/intro.md',
    activeMatch: '^/guide/',
  },
  {
    text: '配置',
    icon: 'icon-park-outline:setting-two',
    link: '/notes/theme/config/intro.md',
    activeMatch: '^/config/',
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: '案例',
    link: '/demos/',
    icon: 'map:wind-surfing',
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '常见问题', link: '/faq/', icon: 'wpf:faq' },
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
      { text: '主题工具', link: '/tools/', icon: 'jam:tools' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: 'Cloudflare',
        icon: 'logos:cloudflare',
        items: [
          { text: 'Workers', link: 'https://developers.cloudflare.com/workers/', icon: 'logos:cloudflare' },
          { text: 'D1', link: 'https://developers.cloudflare.com/d1/', icon: 'logos:cloudflare' },
          { text: 'KV', link: 'https://developers.cloudflare.com/kv/', icon: 'logos:cloudflare' },
          { text: 'Pages', link: 'https://developers.cloudflare.com/pages/', icon: 'logos:cloudflare' },
          { text: 'Wrangler', link: 'https://developers.cloudflare.com/workers/wrangler/', icon: 'logos:cloudflare' },
        ],
      },
      {
        text: 'Hono',
        icon: 'logos:hono',
        items: [
          { text: '中文文档', link: 'https://honodev.pages.dev/zh/', icon: 'logos:hono' },
          { text: 'Document', link: 'https://hono.dev/', icon: 'logos:hono' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    badge: '新',
    items: [
      { text: '更新日志', link: '/changelog/' },
      { text: '参与贡献', link: '/contributing/' },
    ],
  },
])

export const enNavbar: ThemeNavItem[] = defineNavbarConfig([
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  },
  {
    text: 'Config',
    icon: 'icon-park-outline:setting-two',
    link: '/en/config/intro/',
    activeMatch: '^/en/config/',
  },
  {
    text: 'Blog',
    link: '/en/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/en/(blog|article)/',
  },
  {
    text: 'More',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: 'Vuepress',
        items: [
          { text: 'Official Docs', link: 'https://v2.vuepress.vuejs.org' },
          { text: 'Ecosystem', link: 'https://ecosystem.vuejs.press/' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    items: [
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Contributing', link: '/contributing/' },
    ],
  },
])
