import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Table',
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
    render: () => (
        <table>
            <thead>
                <tr>
                    <th role="columnheader" style={{ width: "100px" }}>Header Row</th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader" style={{ width: "100px" }}></th>
                    <th role="columnheader">Overflow?</th>
                    <th role="columnheader">Overflow?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th role="rowheader">Row</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Overflow Cell</td>
                    <td>Overflow Cell</td>
                </tr>
                <tr>
                    <th role="rowheader">Row</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Overflow Cell</td>
                    <td>Overflow Cell</td>
                </tr>
                <tr>
                    <th role="rowheader">Row</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Overflow Cell</td>
                    <td>Overflow Cell</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th role="rowheader">Footer Row</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Overflow Cell</td>
                    <td>Overflow Cell</td>
                </tr>
            </tfoot>
        </table>
    ),
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkMode: Story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
