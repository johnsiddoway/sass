import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        label: 'Button',
        onClick: fn()
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

export const Hover: Story = {
    parameters: { pseudo: { hover: true } },
};

export const Active: Story = {
    parameters: { pseudo: { active: true } },
};

export const Focus: Story = {
    parameters: { pseudo: { focusVisible: true } },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    }
};

export const Large: Story = {
    args: {
        className: 'btn-large'
    },
};

export const Small: Story = {
    args: {
        className: 'btn-small',
    },
};

export const Primary: Story = {
    args: {
        className: 'btn-primary',
    },
};

export const PrimaryActive: Story = {
    args: {
        className: 'btn-primary',
    },
    parameters: { pseudo: { active: true } },
};

export const PrimaryHover: Story = {
    args: {
        className: 'btn-primary',
    },
    parameters: { pseudo: { hover: true } },
};

export const PrimaryFocus: Story = {
    args: {
        className: 'btn-primary',
    },
    parameters: { pseudo: { focusVisible: true } },
};

export const PrimaryInverted: Story = {
    args: {
        className: 'btn-primary-inverted',
    },
};

export const Info: Story = {
    args: {
        className: 'btn-info',
    },
};

export const Success: Story = {
    args: {
        className: 'btn-success',
    },
};

export const Danger: Story = {
    args: {
        className: 'btn-danger',
    },
};

export const Orange: Story = {
    args: {
        className: 'btn-orange',
    },
};

export const Yellow: Story = {
    args: {
        className: 'btn-yellow',
    },
};

export const Green: Story = {
    args: {
        className: 'btn-green',
    },
};

export const Teal: Story = {
    args: {
        className: 'btn-teal',
    },
};

export const Cyan: Story = {
    args: {
        className: 'btn-cyan',
    },
};

export const Blue: Story = {
    args: {
        className: 'btn-blue',
    },
};

export const Indigo: Story = {
    args: {
        className: 'btn-indigo',
    },
};

export const Purple: Story = {
    args: {
        className: 'btn-purple',
    },
};

export const Pink: Story = {
    args: {
        className: 'btn-pink',
    },
};

export const Red: Story = {
    args: {
        className: 'btn-red',
    },
};