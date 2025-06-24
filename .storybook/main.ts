import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: ["../src/components"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    {
                        test: /\.(scss|css)$/,
                        use: ["style-loader", "css-loader", "sass-loader"],
                    },
                ],
            },
        },
        "@storybook/addon-docs",
    ],

    framework: "@storybook/react-webpack5",
    core: { disableTelemetry: true },
};

export default config;
