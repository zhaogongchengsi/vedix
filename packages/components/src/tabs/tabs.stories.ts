import type { Meta, StoryObj } from '@storybook/vue3'
import tabs from './tabs.stories.vue'

const meta = {
  component: tabs,
  title: 'example/tabs',
} satisfies Meta<typeof tabs>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => ({
    components: { tabs },
    template: '<tabs />',
  }),
}
