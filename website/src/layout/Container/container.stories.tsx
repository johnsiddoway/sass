import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/Container',
    component: Container,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
    },
    render: () => <Container />,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultRender = () => <Container />;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: defaultRender,
};

export const DarkMode: Story = {
    parameters: {
        background: 'dark',
    },
    render: defaultRender,
};
