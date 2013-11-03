
# meters

Converts string distances into meters.

```js
var m = require('meters')
m('1 mile')
// 1609.34
m('5nm')
// 9260
m('1,200 yds')
// 1097.28
m('10cm')
// 0.1
m('6\'8"')
// 2.032
```

## Install

With [component][1] or [npm][2]:

```
$ component install lvivier/meters

$ npm install meters
```

## Usage

### m(str)

Attempts to convert `str` into meters from common units.

[1]:http://github.com/component/component
[2]:http://npmjs.org/
