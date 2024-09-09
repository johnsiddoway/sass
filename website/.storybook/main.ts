import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    staticDirs: ['../public'],
    stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-backgrounds",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "storybook-addon-pseudo-states",
        "storybook-dark-mode",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
