import type { Meta, StoryObj } from '@storybook/react-vite';
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
    render: (args) => <Toggle {...args} />,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultDarkMode: Story = {
    globals: {
        backgrounds: {
            value: 'dark',
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CheckedDarkMode: Story = {
    globals: {
        backgrounds: {
            value: 'dark',
        },
    },
    args: {
        defaultChecked: true,
    },
};