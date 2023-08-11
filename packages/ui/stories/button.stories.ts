import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/button.vue';

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: () => ({
		components: { Button },
		template: '<Button > Hello </Button>',
	}),
};

export const Destructive: Story = {
	render: () => ({
		components: { Button },
		template: '<Button variant="Destructive"> Hello </Button>',
	})
};

export const Outline: Story = {
	render: () => ({
		components: { Button },
		template: '<Button variant="outline"> Hello </Button>',
	})
};

export const Secondary: Story = {
	render: () => ({
		components: { Button },
		template: '<Button variant="secondary"> Hello </Button>',
	})
};

export const Ghost: Story = {
	render: () => ({
		components: { Button },
		template: '<Button variant="ghost"> Hello </Button>',
	})
};

export const Link: Story = {
	render: () => ({
		components: { Button },
		template: '<Button variant="link"> Hello </Button>',
	})
};