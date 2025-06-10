import { describe, it } from 'node:test';
import assert from 'node:assert';
import { wordCount } from '../../analyzing/wordCount';

describe('wordCount', () => {
  it('counts words in a string', () => {
    assert.strictEqual(wordCount('hello world'), 2);
  });
  it('returns 0 for empty string', () => {
    assert.strictEqual(wordCount(''), 0);
  });
  it('returns 0 for whitespace string', () => {
    assert.strictEqual(wordCount('   '), 0);
  });
  it('throws if input is not a string', () => {
    assert.throws(() => wordCount(123 as any), /Input must be a string/);
  });
});
