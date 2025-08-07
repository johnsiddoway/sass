import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Range',
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
        id: 'volume',
        label: 'Volume',
        name: 'volume',
        min: 0,
        max: 11,
    },
    render: (args) => (
        <form>
            <label>
                {args.label}
                <input type='range' {...args} />
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
            <label htmlFor="test">Input Range</label>
            <input type="range" id="test" {...args} />
        </form>
    )
}