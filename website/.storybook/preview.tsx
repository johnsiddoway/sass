import React from 'react'
import type { Preview } from '@storybook/react'

import "../src/styles/main.scss";

const preview: Preview = {
    parameters: {
        background: 'light',
        layout: 'centered',
        options: {
            storySort: {
                order: ['ReadMe', 'Changelog', 'Components'],
            },
        },
    },
    decorators: [
        (Story, context) => <div className={`root ${context.parameters.background}`}><Story /></div>
    ],
}

export default preview;
