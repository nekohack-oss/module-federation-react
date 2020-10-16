module.exports = {
    extends: ['@nekohack/eslint-config-react'],
    plugins: ['@typescript-eslint'],
    root: true,
    env: { node: true, es6: true },
    parser: '@typescript-eslint/parser',
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                tabWidth: 4,
            },
        ],
    },
}
