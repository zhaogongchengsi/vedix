
import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from '../src/alert.vue';

const meta = {
    component: Alert,
    title: "Alert"
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    render: () => ({
        components: { Alert },
        template: '<Alert>Button</Alert>',
    }),
};

export const Destructive: Story = {
    render: () => ({
        components: { Alert },
        template: '<Alert variant="destructive">Button</Alert>',
    }),
};