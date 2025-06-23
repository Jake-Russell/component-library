import { Preview } from "@storybook/react-webpack5";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        viewport: {
            viewports: {
                ...MINIMAL_VIEWPORTS,
                layoutDefault: {
                    name: "Default 1200px",
                    styles: { width: "1200px", height: "100%" },
                },
            },
        },
    },
};

export default preview;
