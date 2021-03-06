module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'no-eval': 0,
        'no-undef': 0,
        "no-new": 0,
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-extra-bind": 0,
        "no-trailing-spaces": [2, {
            "skipBlankLines": true
        }]
    }
}