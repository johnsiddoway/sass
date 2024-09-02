import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Miscellaneous',
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
    },
    render: (args) => (
        <form>
            <label>
                {args.label}
                <input {...args} />
            </label>
        </form>
    )
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        label: 'Name (4 to 8 characters):',
        id: 'name',
        name: 'name',
        required: true,
        minLength: 4,
        maxLength: 8,
        size: 10,
        type: 'text',
    },
};

export const Color: Story = {
    args: {
    },
    render: (args) => (
        <form>
            <fieldset>
                <legend>Choose your monster's colors:</legend>
                <p>
                    <input type="color" id="head" name="head" value="#e66465" />
                    <label htmlFor="head">Head</label>
                </p>
                <p>
                    <label className="horizontal">
                        <input type="color" id="body" name="body" value="#f6b73c" />
                        Body
                    </label>
                </p>
                <p>
                    <label className="horizontal">
                        Hands
                        <input type="color" id="hands" name="hands" value="#f6b73c" />
                    </label>
                </p>
                <p>
                    <label htmlFor="feet" className="horizontal">Feet</label>
                    <input type="color" id="feet" name="feet" value="#e66465" />
                </p>
            </fieldset>
        </form>
    )
};

export const Date: Story = {
    args: {
    },
    render: (args) => (
        <form>
            <fieldset>
                <legend>Choose your monster's colors:</legend>
                <p>
                    <label htmlFor="start" className="horizontal">Start date:</label>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                </p>
            </fieldset>
        </form>
    )
};