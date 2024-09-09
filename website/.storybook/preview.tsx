import React from 'react'
import type { Preview } from '@storybook/react'

// import "./preview.scss";
import "../src/styles/main.scss";

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1c1a17' }, // variables.$gray-10
            ],
        },
        layout: 'centered',
        options: {
            storySort: {
                order: ['ReadMe', 'Changelog', 'Components'],
            },
        },
    },
    decorators: [(Story, context) => (
        <div className={`root ${context.parameters.backgrounds.default}`}>
            <Story />
        </div>
    )],
}

export default preview