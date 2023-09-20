export default defineAppConfig({
  docus: {
    title: 'Vedix',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7700b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'https://github.com/zhaogongchengsi/vedix',
    },
    aside: {
      level: 0,
      exclude: [],
      include: [{
            path: '/examples',
            icon: 'heroicons-outline:play',
            title: 'Examples'
      }],
      collapsed: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      fluid: true
    },
    main: {
      fluid: true
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
