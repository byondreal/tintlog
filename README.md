# logger.js
Namespaced and colorful JavaScript console logs!

## Install

    npm install @byondreal/logger

## Usage

    var Logger = require('@byondreal/logger');
    var obj = {};
    Logger.call(obj, 'namespace');
    
    obj.log('Namespaced log #1!');

Shows colored and namespaced log as below:

![Colored, namespaced log]()

## Features

- Disable/re-enable with `Logger.disable()` and `Logger.enable()`
- Initializing with different namespaces cycles through different
  colors

## Example

![Multiple logs example]()

