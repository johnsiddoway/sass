import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    staticDirs: ['../public'],
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@chromatic-com/storybook",
        "storybook-addon-pseudo-states",
        "storybook-dark-mode",
        "@storybook/addon-docs"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
