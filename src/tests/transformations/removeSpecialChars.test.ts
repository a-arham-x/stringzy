import { describe, it } from 'node:test';
import assert from 'node:assert';
import { removeSpecialChars } from '../../transformations/removeSpecialChars';

describe('removeSpecialChars', () => {
  it('removes special characters', () => {
    assert.strictEqual(removeSpecialChars('hello@world!'), 'helloworld');
  });
  it('replaces special characters with custom string', () => {
    assert.strictEqual(removeSpecialChars('hello@world!', '-'), 'hello-world-');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => removeSpecialChars(123 as any), /Invalid argument/);
  });
  it('throws if replacement is not a string', () => {
    assert.throws(() => removeSpecialChars('abc', 123 as any), /Replacement must be a string/);
  });
});
