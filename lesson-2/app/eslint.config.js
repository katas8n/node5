module.exports = [
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest'
        },
        rules: {
            'no-unused-vars': 'warn',
            semi: ['error', 'always']
        }
    }
];
