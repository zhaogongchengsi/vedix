import type { Meta, StoryObj } from '@storybook/vue3'
import aspectRatio from './aspect-ratio.vue'

const meta = {
  component: aspectRatio,
  title: 'example/aspect-ratio',
} satisfies Meta<typeof aspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => ({
    components: { aspectRatio },
    setup() {
      return { args }
    },
    template: `<aspect-ratio v-bind="args" style="width: 250px" > 
            <img src="https://images.unsplash.com/photo-1604156788872-fa65cd2575f5?w=600&dpr=2&q=80" /> 
        </aspect-ratio>`,
  }),
  args: {
    ratio: 3 / 2,
  },
}
