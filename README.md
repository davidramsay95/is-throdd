# is-throdd

Returns `true` if the input number is "throdd": not divisible by 3.

## Usage

```js
const isThrodd = require('is-throdd');

isThrodd(1); // true
isThrodd(4); // true
isThrodd(3); // false
isThrodd(6); // false
```

## Behavior

`isThrodd(value)` returns `value % 3 !== 0`. Zero is divisible by 3, so `isThrodd(0)` returns `false`.

## Development

Tests use the built-in Node.js test runner. No dependencies are required.

```sh
npm test
```

## License

[MIT](LICENSE)
