import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './dialog';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Dialog',
    component: Dialog,
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: () => (
        <div>
            <Dialog id="dialog-1" label="Open Dialog">
                <article>
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example.</p>
                </article>
                <form method="dialog">
                    <button value="no">No</button>
                    &nbsp;
                    <button value="yes">Yes</button>
                </form>
            </Dialog>
        </div>
    ),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    globals: {
        backgrounds: {
            value: 'dark',
        },
    },
    render: () => (
        <div>
            <Dialog id="dialog-1" label="Open Dialog">
                <article>
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example.</p>
                </article>
                <form method="dialog">
                    <button value="no">No</button>
                    &nbsp;
                    <button value="yes">Yes</button>
                </form>
            </Dialog>
        </div>
    ),
};