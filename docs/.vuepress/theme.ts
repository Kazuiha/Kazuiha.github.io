import type { Theme } from 'vuepress'
import process from 'node:process'
import { plumeTheme } from 'vuepress-theme-plume'

export const theme: Theme = plumeTheme({
  hostname: process.env.SITE_HOST || 'https://kazuiha.github.io',

  docsRepo: 'https://github.com/Kazuiha/Kazuiha.github.io',
  docsDir: 'docs',
  changelog: { maxCount: 10 },
    plugins: {
      // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
      git: process.env.NODE_ENV === 'production'
    },
  contributors: { mode: 'block' },

  search: { provider: 'local' },

  codeHighlighter: {
    twoslash: true,
    lineNumbers: 10,
  },

  markdown: {
    chartjs: true,
    echarts: true,
    markmap: true,
    plantuml: true,
    mermaid: true,
    flowchart: true,

    annotation: true,
    abbr: true,
    table: true,
    timeline: true,
    collapse: true,
    chat: true,
    codeTree: true,
    field: true,
    imageSize: 'all',
    pdf: true,
    caniuse: true,
    acfun: true,
    bilibili: true,
    youtube: true,
    artPlayer: true,
    audioReader: true,
    codepen: true,
    replit: true,
    codeSandbox: true,
    jsfiddle: true,
    demo: true,
    npmTo: ['pnpm', 'yarn', 'npm'],
    repl: {
      go: true,
      rust: true,
      kotlin: true,
      python: true,
    },
  },

  comment: {
    provider: 'Giscus',
    comment: true,
    repo: 'pengzhanbo/vuepress-theme-plume',
    repoId: 'R_kgDOG_ebNA',
    category: 'docs-comment',
    categoryId: 'DIC_kwDOG_ebNM4Cd0uF',
    mapping: 'pathname',
    reactionsEnabled: true,
    inputPosition: 'top',
    darkTheme: 'dark_protanopia',
    lightTheme: 'light_protanopia',
  },

  watermark: {
    enabled: false,
    watermarkOptions: {
      content: 'Kazuiha',
    },
  },
})
