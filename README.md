# is-throdd

Returns `true` if the input number is "throdd": not divisible by 3.

The inverse of [`is-threeven`](https://github.com/davidramsay95/is-threeven), which depends on this package.

## Install

```sh
npm install is-throdd
```

## Usage

This package is ESM only.

```js
import isThrodd from 'is-throdd';

isThrodd(1); // true
isThrodd(4); // true
isThrodd(3); // false
isThrodd(6); // false
isThrodd(0); // false
```

## Behavior

`isThrodd(value)` returns `value % 3 !== 0`. Zero is divisible by 3, so `isThrodd(0)` returns `false`.

Inputs follow JavaScript `%` semantics:

- Non-integers such as `1.5` return `true`.
- `NaN`, `Infinity` and `-Infinity` return `true`, because `%` yields `NaN` for them and `NaN !== 0`.
- Negative multiples of 3 return `false`.

## Development

Tests use the built-in Node.js test runner. No dependencies are required.

```sh
npm test
```

## Publishing

Publish this package before `is-threeven`, which declares it as a dependency (`^1.0.0`).

Only `index.js`, `package.json`, `README.md` and `LICENSE` are included in the package tarball. Verify with:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
