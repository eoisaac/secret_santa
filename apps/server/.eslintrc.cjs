/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve("@repo/linting/eslint-nest.js")],
  root: true,
};
