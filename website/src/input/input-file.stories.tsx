import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/File',
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
        accept: 'image/png, image/jpeg',
        id: 'avatar',
        label: 'Choose a profile picture:',
        name: 'avatar',
    },
    render: (args) => (
        <form>
            <label>
                {args.label}
                <input type='file' {...args} />
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

export const InputAfterLabel: Story = {
    args: {
    },
    render: (args) => (
        <form>
            <label htmlFor={args.id}>{args.label}</label>
            <input type="file" {...args} />
        </form>
    )
}