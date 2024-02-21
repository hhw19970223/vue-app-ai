module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        project: './tsconfig.json',
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:@typescript-eslint/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        quotes: ['error', 'single', { allowTemplateLiterals: true }], // 单引号 允许使用反引号
        "@typescript-eslint/no-unused-vars": "off", //[2]禁止出现未使用的变量
        "no-var": 2,
        "arrow-spacing": [2, { before: true, after: true }], //箭头函数前后空格
        "@typescript-eslint/no-non-null-assertion": "off", //非空断言
        'object-curly-spacing': ["error", "always"],//{} 内部强制有空格
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-this-alias": 'off',
        "@typescript-eslint/ban-ts-comment": "off",
    }
}
