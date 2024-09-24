import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Toggle',
    component: Toggle,
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
        id: 'test',
        label: 'Turn it up to Eleven',
        name: 'turn-it-up-to-eleven',
    },
    render: (args) => (
        <label className="toggle">
            <input type="checkbox" {...args} />
            {args.label}
        </label>
    )
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
    render: (args) => (
        <label className="toggle">
            <input type="checkbox" {...args} />
            {args.label}
        </label>
    )
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checked: Story = {
    args: {
        checked: true,
    },
    render: (args) => (
        <label className="toggle">
            <input type="checkbox" {...args} />
            {args.label}
        </label>
    )
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultDarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
    },
    render: (args) => (
        <label className="toggle">
            <input type="checkbox" {...args} />
            {args.label}
        </label>
    )
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CheckedDarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        checked: true,
    },
    render: (args) => (
        <label className="toggle">
            <input type="checkbox" {...args} />
            {args.label}
        </label>
    )
};