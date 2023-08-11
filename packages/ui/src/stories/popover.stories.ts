import type { Meta, StoryObj } from '@storybook/vue3';
import MyPage from './popover.vue';

const meta = {
  title: 'Example/Popover',
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: '<my-page />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popover: Story = {};
