# tintlog
Namespaced and colorful JavaScript console logs!

## Install

    npm install --save tintlog

## Usage

    var Tintlog = require('tintlog');
    var obj = {};
    Tintlog.call(obj, 'namespace');
    
    obj.log('Namespaced log #1');

Shows colored and namespaced logs on console!

## Features

- Disable/re-enable with `Tintlog.disable()` and `Tintlog.enable()`
- Initializing with different namespaces cycles through different
  colors
- Initializing with the same namespace again will preserve the
  original color used for that namespace (unlike [debug][1])

[1] - https://www.npmjs.com/package/debug

