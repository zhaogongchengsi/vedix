
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './button.vue';

const meta = {
    component: Button,
    title: "example/button"
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    render: () => ({
        components: { Button },
        template: '<Button >Button</Button>',
    }),
};

export const Destructive: Story = {
    render: () => ({
        components: { Button },
        template: '<Button variant="destructive">Button</Button>',
    }),
};

export const Ghost: Story = {
    render: () => ({
        components: { Button },
        template: '<Button variant="ghost">Button</Button>',
    }),
};

export const Link: Story = {
    render: () => ({
        components: { Button },
        template: '<Button variant="link">Button</Button>',
    }),
};

export const Outline: Story = {
    render: () => ({
        components: { Button },
        template: '<Button variant="outline">Button</Button>',
    }),
};

export const Secondary: Story = {
    render: () => ({
        components: { Button },
        template: '<Button variant="secondary">Button</Button>',
    }),
};