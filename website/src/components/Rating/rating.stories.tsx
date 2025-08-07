import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Rating',
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
    },
    render: () => (
        <div className="rating">
            <input type="radio" id="rating-5" name="rating" value="5" />
            <label htmlFor="rating-5">5</label>
            <input type="radio" id="rating-4" name="rating" value="4" />
            <label htmlFor="rating-4">4</label>
            <input type="radio" id="rating-3" name="rating" value="3" />
            <label htmlFor="rating-3">3</label>
            <input type="radio" id="rating-2" name="rating" value="2" />
            <label htmlFor="rating-2">2</label>
            <input type="radio" id="rating-1" name="rating" value="1" />
            <label htmlFor="rating-1">1</label>
        </div>
    ),
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
