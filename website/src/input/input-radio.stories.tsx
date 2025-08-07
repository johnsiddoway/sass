import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Radio',
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
        label: 'Check this radio button',
        name: 'test',
        value: 'checked',
        onClick: fn()
    },
    render: (args) => (
        <form>
            <label className="horizontal">
                <input type='radio' {...args} />
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
                <legend>Select a maintenance drone:</legend>
                <div>
                    <label htmlFor="huey" className="horizontal">Huey</label>
                    <input type="radio" name="drone" id="huey" />
                </div>
                <div>
                    <label htmlFor="dewey" className="horizontal">Dewey</label>
                    <input type="radio" name="drone" id="dewey" />
                </div>
                <div>
                    <label htmlFor="louie" className="horizontal">Louie</label>
                    <input type="radio" name="drone" id="louie" />
                </div>
            </fieldset>
        </form>
    )
};

export const InputBeforeLabel: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <div>
                    <input type="radio" name="drone" id="huey" />
                    <label htmlFor="huey">Huey</label>
                </div>
                <div>
                    <input type="radio" name="drone" id="dewey" />
                    <label htmlFor="dewey">Dewey</label>
                </div>
                <div>
                    <input type="radio" name="drone" id="louie" />
                    <label htmlFor="louie">Louie</label>
                </div>
            </fieldset>
        </form>
    )
};

export const InputInsideLabelAfterText: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <label className="horizontal">
                    Huey
                    <input type="radio" name="drone" id="huey" />
                </label>
                <label className="horizontal">
                    Dewey
                    <input type="radio" name="drone" id="dewey" />
                </label>
                <label className="horizontal">
                    Louie
                    <input type="radio" name="drone" id="louie" />
                </label>
            </fieldset>
        </form>
    )
};

export const InputInsideLabelBeforeText: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <label className="horizontal">
                    <input type="radio" name="drone" id="huey" />
                    Huey
                </label>
                <label className="horizontal">
                    <input type="radio" name="drone" id="dewey" />
                    Dewey
                </label>
                <label className="horizontal">
                    <input type="radio" name="drone" id="louie" />
                    Louie
                </label>
            </fieldset>
        </form>
    )
};