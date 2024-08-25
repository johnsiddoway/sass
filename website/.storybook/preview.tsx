import React from 'react'
import type { Preview } from '@storybook/react'

import "./preview.scss";
import "../src/styles/main.scss";

const preview: Preview = {
    parameters: {
        layout: 'centered',
        options: {
            storySort: {
                order: ['ReadMe', 'Changelog', 'Components'],
            },
        },
    },
    decorators: [(Story) => (
        <div className="wrapper">
            <div className="root light">
                <Story />
            </div>

            <div className="root dark">
                <Story />
            </div>
        </div>
    )],
}

export default preview