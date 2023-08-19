import type { Meta, StoryObj } from '@storybook/vue3'
import Label from './label.vue'

const meta = {
  component: Label,
  title: 'example/label',
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => ({
    components: { Label },
    template: '<Label for="terms">Accept terms and conditions</Label>',
  }),
}
