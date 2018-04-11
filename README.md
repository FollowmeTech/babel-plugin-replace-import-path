[![build pass](https://api.travis-ci.org/dwqs/babel-plugin-replace-import-path.svg?branch=master)](https://travis-ci.org/dwqs/babel-plugin-replace-import-path?branch=master) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) ![npm-version](https://img.shields.io/npm/v/babel-plugin-replace-import-path.svg) ![license](https://img.shields.io/npm/l/babel-plugin-replace-import-path.svg)
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
    libraryName: 'test',
    libraryPath: 'lib',  // default: lib
    stylePath: 'your-style-path', // defalut: undefined
    needImportStyle: true       // default: false
}
```

`options` can be an array.

```
[
    {
        libraryName: 'test1'
    },
    {
        libraryName: 'test2'
    }
]
```

## Example

**{ "libraryName": "test1" }**

```js
import { A } from 'test1';

↓ ↓ ↓ ↓ ↓ ↓

var a = require('test1/lib/a');
```

**{ "libraryName": "test2", libraryPath: 'dist/my-library', stylePath: 'style1', needImportStyle: true }**

```
import { B } from 'test2';

↓ ↓ ↓ ↓ ↓ ↓

var b = require('test2/dist/my-library/b');
require('test2/style1/b.css');
```

## LICENSE
MIT
