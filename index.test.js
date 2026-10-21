'use strict';

import { test } from 'node:test';
import assert from 'node:assert/strict';
import isThrodd from './index.js';

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

test('throws a TypeError for NaN and Infinity', () => {
  assert.throws(() => isThrodd(NaN), TypeError);
  assert.throws(() => isThrodd(Infinity), TypeError);
  assert.throws(() => isThrodd(-Infinity), TypeError);
});

test('throws a TypeError for values beyond the safe integer range', () => {
  assert.throws(() => isThrodd(Number.MAX_SAFE_INTEGER + 1), TypeError);
  assert.throws(() => isThrodd(Number.MIN_SAFE_INTEGER - 1), TypeError);
  assert.equal(isThrodd(Number.MAX_SAFE_INTEGER), true);
});

test('throws a TypeError for non-number inputs', () => {
  assert.throws(() => isThrodd('3'), TypeError);
  assert.throws(() => isThrodd(null), TypeError);
  assert.throws(() => isThrodd(undefined), TypeError);
  assert.throws(() => isThrodd(3n), TypeError);
  assert.throws(() => isThrodd(), TypeError);
});

test('always returns a boolean', () => {
  assert.equal(typeof isThrodd(3), 'boolean');
  assert.equal(typeof isThrodd(4), 'boolean');
});
