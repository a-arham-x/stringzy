import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isEmpty } from '../../validations/isEmpty';

describe('isEmpty', () => {
  it('returns true for empty string', () => {
    assert.strictEqual(isEmpty(''), true);
  });
  it('returns true for whitespace string', () => {
    assert.strictEqual(isEmpty('   '), true);
  });
  it('returns false for non-empty string', () => {
    assert.strictEqual(isEmpty('foo'), false);
  });
});
