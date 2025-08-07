import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Text',
    component: Input,
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
        label: 'Name (4 to 8 characters):',
        id: "name",
        name: "name",
        required: true,
        minLength: 4,
        maxLength: 8,
        size: 10,
        onChange: () => { },
        type: 'text',
    },
    render: (args) => (
        <form>
            <label>
                {args.label}
                <input type='text' {...args} />
            </label>
        </form>
    )
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

export const Placeholder: Story = {
    args: {
        placeholder: 'Enter Your Name',
    }
}

export const InputAfterLabel: Story = {
    args: {
    },
    render: (args) => (
        <form>
            <label htmlFor={args.id}>{args.label}</label>
            <input id={args.id} {...args} />
        </form>
    )
}