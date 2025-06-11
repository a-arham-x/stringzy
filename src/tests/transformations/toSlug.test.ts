import { describe, it } from 'node:test';
import assert from 'node:assert';
import { toSlug } from '../../transformations/toSlug';

describe('toSlug', () => {
  it('converts text to slug', () => {
    assert.strictEqual(toSlug('Hello World!'), 'hello-world');
  });
  it('handles already slugged text', () => {
    assert.strictEqual(toSlug('already-slugged'), 'already-slugged');
  });
  it('removes special characters', () => {
    assert.strictEqual(toSlug('foo@bar#baz'), 'foobarbaz');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => toSlug(123 as any), /Invalid argument/);
  });
});
