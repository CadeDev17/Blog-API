module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/reccomended',
        'prettier/@typescript-eslint',
        'plugin:prettier/reccomended'
    ],
    parseOptions: {
        ecmaVersion: 2018,
        sourseType: 'module'
    },
    rules: {}
}