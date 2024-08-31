import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputRadio } from './input-radio';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Radio',
    component: InputRadio,
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
            <InputRadio {...args} />
        </form>
    )
} satisfies Meta<typeof InputRadio>;

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

export const RadioAfterLabel: Story = {
    render: () => (
        <form>
            <div>
                <label htmlFor="radio-1">Option 1</label>
                <input type="radio" id="radio-1" name="radio" value="radio-1" />
            </div>
            <div>
                <label htmlFor="radio-2">Option 2</label>
                <input type="radio" id="radio-2" name="radio" value="radio-2" />
            </div>
            <div>
                <label htmlFor="radio-3">Option 3</label>
                <input type="radio" id="radio-3" name="radio" value="radio-3" />
            </div>
        </form>
    ),
}

export const RadioInsideLabel: Story = {
    render: () => (
        <form>
            <div>
                <label>
                    Option 1
                    <input type="radio" id="radio-1" name="radio" value="radio-1" />
                </label>
            </div>
            <div>
                <label>
                    Option 2
                    <input type="radio" id="radio-2" name="radio" value="radio-2" />
                </label>
            </div>
            <div>
                <label>
                    Option 3
                    <input type="radio" id="radio-3" name="radio" value="radio-3" />
                </label>
            </div>
        </form>
    ),
}

export const Multiple: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Select a maintenance drone:</legend>
                <div>
                    <InputRadio id="huey" label="Huey" name="drone" value="huey" />
                </div>
                <div>
                    <InputRadio id="dewey" label="Dewey" name="drone" value="dewuey" />
                </div>
                <div>
                    <InputRadio id="louie" label="Louie" name="drone" value="louie" />
                </div>
            </fieldset>
        </form>
    )
}