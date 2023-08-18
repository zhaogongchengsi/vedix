import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './alert.vue'

const meta = {
  component: Alert,
  title: 'example/alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => ({
    components: { Alert },
    template: '<Alert>Button</Alert>',
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert },
    template: '<Alert variant="destructive">Button</Alert>',
  }),
}
