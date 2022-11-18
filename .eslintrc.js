/*eslint-env node*/

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'no-trailing-spaces': ['error'],
        'vue/html-indent': ['error', 4],
        "vue/multi-word-component-names":['off']
    },
};
