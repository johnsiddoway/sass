import type { Meta, StoryObj } from '@storybook/react';
import { DefinitionList } from './definitionlist';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Definition List',
    component: DefinitionList,
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
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof DefinitionList>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: () => <DefinitionList />,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Row: Story = {
    render: () => <DefinitionList className="row" />,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
    render: () => <DefinitionList />,
};
