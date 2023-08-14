import type { Meta, StoryObj } from '@storybook/vue3';
import Page from './page.vue';

const meta = {
  title: 'Example/Popper',
  component: Page,
  render: () => ({
    components: { Page },
    template: '<Page />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popper: Story = {};
