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

Input is validated with [`is-safe-number`](https://github.com/davidramsay95/is-safe-number). A `TypeError` is thrown if `value` is not a primitive number, is `NaN`, `Infinity` or `-Infinity`, or is outside the safe integer range.

Otherwise the result follows JavaScript `%` semantics:

- Non-integers such as `1.5` return `true`.
- Negative multiples of 3 return `false`.

## Development

Tests use the built-in Node.js test runner.

`is-safe-number` must be resolvable from `node_modules`. Once it is published, `npm install` is enough. Until then, link the local sibling checkout without modifying `package.json`:

```sh
npm install --no-save --no-package-lock ../is-safe-number
npm test
```

```sh
npm test
```

## Publishing

Publish `is-safe-number` first, then this package, then `is-threeven`. Each declares the previous one as a dependency (`^1.0.0`), so installing fails until it exists on the registry.

Only `index.js`, `package.json`, `README.md` and `LICENSE` are included in the package tarball. Verify with:

```sh
npm pack --dry-run
```

## License

[MIT](LICENSE)
