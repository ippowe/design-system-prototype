module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  typescript: {
    reactDocgen: false,
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
};
