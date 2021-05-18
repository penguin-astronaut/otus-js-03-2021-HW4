module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "ignorePackages",
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-alert": "off",
  },
  plugins: ["jest"],
};
