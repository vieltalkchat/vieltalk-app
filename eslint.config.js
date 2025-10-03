// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const pluginLingui = require("eslint-plugin-lingui");

module.exports = defineConfig([
  expoConfig,
  pluginLingui.configs["flat/recommended"],
  {
    ignores: ['dist/*'],
  },
]);
