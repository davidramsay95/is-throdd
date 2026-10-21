'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const isThrodd = require('./index.js');

test('exports a function', () => {
  assert.equal(typeof isThrodd, 'function');
});

test('returns true for numbers not divisible by 3', () => {
  assert.equal(isThrodd(1), true);
  assert.equal(isThrodd(2), true);
  assert.equal(isThrodd(4), true);
});

test('returns true for negative numbers not divisible by 3', () => {
  assert.equal(isThrodd(-1), true);
  assert.equal(isThrodd(-4), true);
});

test('returns false for numbers divisible by 3', () => {
  assert.equal(isThrodd(3), false);
  assert.equal(isThrodd(6), false);
  assert.equal(isThrodd(999), false);
});

test('returns false for zero, which is divisible by 3', () => {
  assert.equal(isThrodd(0), false);
});

test('returns false for negative numbers divisible by 3', () => {
  assert.equal(isThrodd(-3), false);
  assert.equal(isThrodd(-9), false);
});

test('returns true for non-integers', () => {
  assert.equal(isThrodd(1.5), true);
  assert.equal(isThrodd(3.5), true);
});

test('returns true for NaN and Infinity', () => {
  assert.equal(isThrodd(NaN), true);
  assert.equal(isThrodd(Infinity), true);
  assert.equal(isThrodd(-Infinity), true);
});

test('always returns a boolean', () => {
  assert.equal(typeof isThrodd(3), 'boolean');
  assert.equal(typeof isThrodd(4), 'boolean');
});
