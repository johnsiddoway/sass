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