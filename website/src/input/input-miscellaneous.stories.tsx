import type { Meta, StoryObj } from '@storybook/react-vite';
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
} satisfies Meta<typeof Input>;

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
    render: () => (
        <form>
            <fieldset>
                <legend>Choose your monster's colors:</legend>
                <p>
                    <input type="color" id="color-1" name="color-1" value="#e66465" />
                    <label htmlFor="color-1">Input Element Before Label Element</label>
                </p>
                <p>
                    <label>
                        <input type="color" id="color-2" name="color-2" value="#f6b73c" />
                        Input Inside Label, Before Text
                    </label>
                </p>
                <p>
                    <label>
                        Input Inside Label, After Text
                        <input type="color" id="color-3" name="color-3" value="#f6b73c" />
                    </label>
                </p>
                <p>
                    <label htmlFor="color-4">Input Element After Label Element</label>
                    <input type="color" id="color-4" name="color-4" value="#e66465" />
                </p>
                <p>
                    <label htmlFor="color-5" className="horizontal">Input After Horizontal Label</label>
                    <input type="color" id="color-5" name="color-5" value="#e66465" />
                </p>
                <p>
                    <input type="color" id="color-6" name="color-6" value="#e66465" />
                    <label htmlFor="color-6" className="horizontal">Input Before Horizontal Label</label>
                </p>
                <p>
                    <label className="horizontal">
                        Input Inside Horizontal Label, After Text
                        <input type="color" id="color-7" name="color-7" value="#f6b73c" />
                    </label>
                </p>
                <p>
                    <label className="horizontal">
                        <input type="color" id="color-8" name="color-8" value="#f6b73c" />
                        Input Inside Horizontal Label, Before Text
                    </label>
                </p>
            </fieldset>
        </form>
    )
};

export const Date: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Date Inputs</legend>
                <p>
                    <label htmlFor="date-1" className="horizontal">Start date:</label>
                    <input type="date" id="date-1" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                </p>
                <p>
                    <input type="date" id="date-2" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                    <label htmlFor="date-2" className="horizontal">Start date:</label>
                </p>
                <p>
                    <label className="horizontal">
                        Start date:
                        <input type="date" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                    </label>
                </p>
                <p>
                    <label className="horizontal">
                        <input type="date" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                        Start date:
                    </label>
                </p>
            </fieldset>
        </form>
    )
};

export const DateTimeLocal: Story = {
    render: () => (
        <form>
            <fieldset>
                <legend>Date Inputs</legend>
                <p>
                    <label htmlFor="datetime-local-1">Choose a time for your appointment:</label>
                    <input type="datetime-local" id="datetime-local-1" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" />
                </p>
                <p>
                    <input type="datetime-local" id="datetime-local-2" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" />
                    <label htmlFor="datetime-local-2">Choose a time for your appointment:</label>
                </p>
                <p>
                    <label>
                        Choose a time for your appointment:
                        <input type="datetime-local" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="datetime-local" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" />
                        Choose a time for your appointment:
                    </label>
                </p>
            </fieldset>
        </form>
    )
};

export const Email: Story = {
    render: () => (
        <form>
            <p>
                <label htmlFor="email">Enter your example.com email:</label>
                <input type="email" id="email" pattern=".+@example\.com" required size={30} />
            </p>
        </form>
    )
};