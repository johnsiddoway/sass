import type { Meta, StoryObj } from '@storybook/react-vite';
import { Abbreviation } from './abbreviation';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Abbreviation',
    component: Abbreviation,
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
} satisfies Meta<typeof Abbreviation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AbbreviationDefault: Story = {
    render: () => (
        <p>
            The <Abbreviation title="Hypertext Markup Language">HTML</Abbreviation> abbreviation element.
        </p>
    ),
};

export const DarkMode: Story = {
    globals: {
        backgrounds: {
            value: 'dark',
        },
    },
    render: () => (
        <p>
            The <Abbreviation title="Hypertext Markup Language">HTML</Abbreviation> abbreviation element.
        </p>
    ),
};

export const Tooltip: Story = {
    render: () => (
        <p>
            The <Abbreviation dataTooltip="Hypertext Markup Language">HTML</Abbreviation> abbreviation element.
        </p>
    ),
};

export const TooltipDarkMode: Story = {
    globals: {
        backgrounds: {
            value: 'dark',
        },
    },
    render: () => (
        <p>
            The <Abbreviation dataTooltip="Hypertext Markup Language">HTML</Abbreviation> abbreviation element.
        </p>
    ),
};