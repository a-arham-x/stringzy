import { describe, it } from 'node:test';
import assert from 'node:assert';
import { characterCount } from '../../analyzing/characterCount';

describe('characterCount', () => {
  it('returns length of string', () => {
    assert.strictEqual(characterCount('hello'), 5);
  });
  it('returns 0 for empty string', () => {
    assert.strictEqual(characterCount(''), 0);
  });
  it('throws if input is not a string', () => {
    assert.throws(() => characterCount(123 as any), /Input must be a string/);
  });
});
