[![build pass](https://api.travis-ci.org/fmfe/babel-plugin-replace-import-path.svg?branch=master)](https://travis-ci.org/dwqs/babel-plugin-replace-import-path?branch=master) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) ![npm-version](https://img.shields.io/npm/v/babel-plugin-replace-import-path.svg) ![license](https://img.shields.io/npm/l/babel-plugin-replace-import-path.svg)
# babel-plugin-replace-import-path
替换 import path 的值

## Installation
Install the pkg with npm:

```
npm i babel-plugin-replace-import-path -D
```

or yarn

```
yarn add babel-plugin-replace-import-path -D
```

## Usage

Via `.babelrc` or babel-loader.

```
{
  "plugins": [["replace-import-path", options]]
}
```

### options

`options` can be object.

```
{
    src: 'test',
    dest: 'lib'
}
```

`options` can be an array.

```
[
    {
        src: 'test1',
        dest: 'lib1'
    },
    {
        src: 'test2',
        dest: 'lib2'
    }
]
```

## Example

**{ "src": "test1/aaa", dest: "test2/bbb" }**

```js
import { A } from 'test1/aaa';

↓ ↓ ↓ ↓ ↓ ↓

var a = require('test2/bbb');
```

## LICENSE
MIT
