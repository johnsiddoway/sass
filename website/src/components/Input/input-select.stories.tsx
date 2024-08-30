import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputSelect } from './input-select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Input/Select',
    component: InputSelect,
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
        label: 'Your favorite pet',
        onChange: (e: any) => {},
        children: <>
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </>,
    },
    render: (args) => (
        <form>
            <InputSelect {...args} />
        </form>
    )
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

export const OptGroups: Story = {
    args: {
        label: 'Your favorite food',
        children: <>
            <option value="">Choose a food</option>
            <hr />
            <optgroup label="Fruit">
                <option value="apple">Apples</option>
                <option value="banana">Bananas</option>
                <option value="cherry">Cherries</option>
                <option value="damson">Damsons</option>
            </optgroup>
            <hr />
            <optgroup label="Vegetables">
                <option value="artichoke">Artichokes</option>
                <option value="broccoli">Broccoli</option>
                <option value="cabbage">Cabbages</option>
            </optgroup>
            <hr />
            <optgroup label="Meat">
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="pork">Pork</option>
            </optgroup>
            <hr />
            <optgroup label="Fish">
                <option value="cod">Cod</option>
                <option value="haddock">Haddock</option>
                <option value="salmon">Salmon</option>
                <option value="turbot">Turbot</option>
            </optgroup>
        </>
    }
}