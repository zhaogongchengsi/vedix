export default defineAppConfig({
	docus: {
	  title: 'Docus',
	  description: 'My Docus Project',
	  url: 'http://docus.dev',
	  image: '/social-card-preview.png',
	  socials: {
		twitter: '@nuxt_js',
		github: 'nuxt-themes/docus',
	  },
	  github: {
		root: 'content',
		edit: true,
		contributors: false
	  },
	  layout: 'default',
	  aside: {
		level: 1,
		filter: [],
	  },
	  header: {
		title: false,
		logo: true,
		showLinkIcon: false
	  },
	  footer: {
		credits: {
		  icon: 'IconDocus',
		  text: 'Powered by Docus',
		  href: 'https://docus.dev',
		},
		textLinks: [
		  {
			text: 'Nuxt',
			href: 'https://nuxt.com',
			target: '_blank',
			rel: 'noopener'
		  }
		],
		iconLinks: [
		  {
			label: 'NuxtJS',
			href: 'https://nuxtjs.org',
			component: 'IconNuxtLabs',
		  },
		  {
			label: 'Vue Telescope',
			href: 'https://vuetelescope.com',
			component: 'IconVueTelescope',
		  },
		],
	  }
	}
  })
  