import { defineConfig } from 'unocss'

export default defineConfig({
	shortcuts: [
		[/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
	],
	theme: {
		// ...
		colors: {
			'veryCool': '#0000ff', // class="text-very-cool"
			'brand': {
				'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
			}
		},
	}
})
