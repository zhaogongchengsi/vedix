
import type { Meta, StoryObj } from '@storybook/vue3';
import avatar from './avatar.vue';

const meta = {
    component: avatar,
    title: "example/avatar"
} satisfies Meta<typeof avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const src = "https://github.com/shadcn.png"

export const Default: Story = {
    render: (args: any) => ({
        components: { avatar },
        setup() {
            return { args }
        },
        template: `<avatar v-bind="args"  />`,
    }),
    args: {
        src
    },
};

export const Slot: Story = {
    render: (args: any) => ({
        components: { avatar },
        setup() {
            return { args }
        },
        template: `<avatar  >
            <img v-bind="args" />
        </avatar>`,
    }),
    args: {
        src
    },
};

