import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Card',
    component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        children: <>
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
                diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
                consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
                at turpis.
            </p>
        </>
    }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    args: {
        children: <>
            <h2>Lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
                diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
                consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
                at turpis.
            </p>
        </>
    }
};