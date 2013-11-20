phlow
=====

Wrap an object flow middleware with it

## install

```sh
$ npm install phlow
```

## usage

```js

var phlow = require('phlow')

var a = [
  'joe', 'harry', 'max', 'travis', 'zach', 'damjan', 'sam'
];

phlow(a)
  .use(filterLength(3))
  .use(indexOf('a'))
  .end(function (err, a) {
    if (err) throw err;
    console.log(a); // ['max', 'sam']
  });


function filterLength (len) {
  return function (a, next) {
    return next(null, a.filter(function (i) {
      return len == i.length;
    }));
  }
}

function indexOf (s) {
  return function (a, next) {
    return next(null, a.filter(function (i) {
      return -1 != i.indexOf(s);
    }));
  }
}
```

## license

MIT
