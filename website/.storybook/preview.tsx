import React from 'react'
import type { Preview } from '@storybook/react-vite'

import "../src/styles/main.scss";

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                light: { name: 'Light', value: '#fff' }, // $white
                dark: { name: 'Dark', value: '#1a1a1a' }, // $gray-10
            },
        },
        layout: 'centered',
        options: {
            storySort: {
                order: ['ReadMe', 'Changelog', 'Components'],
            },
        },
    },
    initialGlobals: {
        // 👇 Set the initial background color
        backgrounds: { value: 'light' },
    },
    decorators: [
        (Story, context) => {
            console.info('Globals:');
            console.info(context.globals);
            console.info('Parameters:');
            console.info(context.parameters);
            return <div className={`root ${context.globals.backgrounds.value}`}><Story /></div>
        }
    ],
}

export default preview;
