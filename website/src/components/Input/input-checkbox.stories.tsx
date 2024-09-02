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
        className: 'checkbox',
        id: 'test',
        label: 'Check this box',
        name: 'test',
        value: 'checked',
        onClick: fn()
    },
    render: (args) => (
        <form>
            <label className="horizontal">
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
export const Checked: Story = {
    args: {
        checked: true,
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
                    <label htmlFor="scales" className="horizontal">Scales</label>
                    <input type="checkbox" id="scales" name="scales" checked />
                </div>
                <div>
                    <label htmlFor="horns" className="horizontal">Horns</label>
                    <input type="checkbox" id="horns" name="horns" />
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
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label htmlFor="scales">Scales</label>
                </div>
                <div>
                    <input type="checkbox" id="horns" name="horns" />
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
                    <label className="horizontal">
                        Scales
                        <input type="checkbox" id="scales" name="scales" checked />
                    </label>
                </div>
                <div>
                    <label className="horizontal">
                        Horns
                        <input type="checkbox" id="horns" name="horns" />
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
                    <label className="horizontal">
                        <input type="checkbox" id="scales" name="scales" checked />
                        Scales
                    </label>
                </div>
                <div>
                    <label className="horizontal">
                        <input type="checkbox" id="horns" name="horns" />
                        Horns
                    </label>
                </div>
            </fieldset>
        </form>
    )
};