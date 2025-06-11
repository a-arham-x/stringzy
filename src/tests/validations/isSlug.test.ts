import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isSlug } from '../../validations/isSlug';

describe('isSlug', () => {
  it('returns true for valid slug', () => {
    assert.strictEqual(isSlug('foo-bar-baz'), true);
  });
  it('returns false for string with spaces', () => {
    assert.strictEqual(isSlug('foo bar'), false);
  });
  it('returns false for empty string', () => {
    assert.strictEqual(isSlug(''), false);
  });
  it('returns false for non-string input', () => {
    assert.strictEqual(isSlug(123 as any), false);
  });
});
