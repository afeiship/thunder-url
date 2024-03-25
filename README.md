# thunder-url
> Download url to thunder url.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/thunder-url
```

## usage
```js
import ThunderURL from '@jswork/thunder-url';

// usage goes here.
// encode:
const url = 'https://www.baidu.com';
const thunderUrl = ThunderURL.encode(url);
console.log(thunderUrl);

// decode:
const url2 = ThunderURL.decode(thunderUrl);
console.log(url2);
```

## license
Code released under [the MIT license](https://github.com/afeiship/thunder-url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/thunder-url
[version-url]: https://npmjs.org/package/@jswork/thunder-url

[license-image]: https://img.shields.io/npm/l/@jswork/thunder-url
[license-url]: https://github.com/afeiship/thunder-url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/thunder-url
[size-url]: https://github.com/afeiship/thunder-url/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/thunder-url
[download-url]: https://www.npmjs.com/package/@jswork/thunder-url
