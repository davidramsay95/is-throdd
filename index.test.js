'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const isThrodd = require('./index.js');

test('exports a function', () => {
  assert.equal(typeof isThrodd, 'function');
});

test('returns true for numbers not divisible by 3', () => {
  assert.equal(isThrodd(1), true);
  assert.equal(isThrodd(4), true);
});

test('returns false for numbers divisible by 3', () => {
  assert.equal(isThrodd(3), false);
  assert.equal(isThrodd(6), false);
});
