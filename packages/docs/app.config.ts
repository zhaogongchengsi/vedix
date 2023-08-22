export default defineAppConfig({
  docus: {
    title: 'Vedix',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'https://github.com/zhaogongchengsi/vedix',
    },
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
    },
    footer: {
      textLinks: [
        {
          text: 'UI Shadcn',
          href: 'https://ui.shadcn.com/docs',
          target: "_blank"
        },
        {
          text: 'Oku UI',
          href: 'https://oku-ui.com/primitives',
          target: "_blank"
        },
        {
          text: 'Unocss',
          href: 'https://unocss.dev',
          target: "_blank"
        }
      ]
    }
  }
})
