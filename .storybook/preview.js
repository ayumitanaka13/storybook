export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// import { addParameters, addDecorator } from "@storybook/react";
// import { withKnobs } from "@storybook/addon-knobs";
// import { withA11y } from "@storybook/addon-a11y";
// import { withContexts } from "@storybook/addon-contexts/react";
// import { contexts } from "./contexts";

// addParameters({
//   backgrounds: [
//     { name: "Default theme", value: "#ffffff", default: true },
//     { name: "Dark theme", value: "#050449" },
//   ],
// });

// addDecorator(withKnobs);
// addDecorator(withA11y);
// addDecorator(withContexts(contexts));
