import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Checkbox',
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
        id: 'test',
        label: 'Check this box',
        name: 'test',
        value: 'checked',
        onClick: fn()
    },
    render: (args) => (
        <form>
            <label>
                <input type='checkbox' {...args} />
                {args.label}
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
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
export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const InputAfterLabel: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Choose your monster's features:</legend>
                <div>
                    <label htmlFor="scales">Scales</label>
                    <input type="checkbox" id="scales" name="feature" defaultChecked={true} />
                </div>
                <div>
                    <label htmlFor="horns">Horns</label>
                    <input type="checkbox" id="horns" name="feature" />
                </div>
            </fieldset>
        </form>
    )
};

export const InputBeforeLabel: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Choose your monster's features:</legend>
                <div>
                    <input type="checkbox" id="scales" name="feature" defaultChecked={true} />
                    <label htmlFor="scales">Scales</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="feature" />
                    <label htmlFor="horns">Horns</label>
                </div>
            </fieldset>
        </form>
    )
};

export const InputInsideLabelAfterText: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Choose your monster's features:</legend>
                <div>
                    <label>
                        Scales
                        <input type="checkbox" id="scales" name="feature" defaultChecked={true} />
                    </label>
                </div>
                <div>
                    <label>
                        Horns
                        <input type="checkbox" id="horns" name="feature" />
                    </label>
                </div>
            </fieldset>
        </form>
    )
};

export const InputInsideLabelBeforeText: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Choose your monster's features:</legend>
                <div>
                    <label>
                        <input type="checkbox" id="scales" name="feature" defaultChecked={true} />
                        Scales
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="horns" name="feature" />
                        Horns
                    </label>
                </div>
            </fieldset>
        </form>
    )
};