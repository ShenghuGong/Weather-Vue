module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'browser': true,
    'es6': true
  },
  globals: {
    '$': true,
    '_': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard',
  // https://github.com/airbnb/javascript
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // always required semicolons
    'semi': [1, 'always'],
    // turn off no-unused-vars rule
    'no-unused-vars': ['off'],
    // 关闭尾部逗号检测
    'comma-dangle': ['off'],
    // 字符串模板
    'prefer-template': ['warn']
  }
};
