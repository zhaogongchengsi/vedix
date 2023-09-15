import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Progress from './progress.vue'

const meta = {
  component: Progress,
  title: 'example/progress',
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => ({
    components: { Progress },
    setup() {
      const value = ref(20)
      return {
        value,
      }
    },
    template: '<div class="w-1/2 mx-auto"> <Progress v-model="value" /> </div>',
  }),
}
