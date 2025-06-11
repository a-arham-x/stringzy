import { describe, it } from 'node:test';
import assert from 'node:assert';
import { characterFrequency } from '../../analyzing/characterFrequency';

describe('characterFrequency', () => {
  it('returns frequency of each character', () => {
    assert.deepStrictEqual(characterFrequency('aab'), { a: 2, b: 1 });
  });
  it('ignores spaces', () => {
    assert.deepStrictEqual(characterFrequency('a a b'), { a: 2, b: 1 });
  });
  it('returns empty object for empty string', () => {
    assert.deepStrictEqual(characterFrequency(''), {});
  });
  it('throws if input is not a string', () => {
    assert.throws(() => characterFrequency(123 as any), /Input must be a string/);
  });
});
