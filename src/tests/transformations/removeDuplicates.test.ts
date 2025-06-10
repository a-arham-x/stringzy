import { describe, it } from 'node:test';
import assert from 'node:assert';
import { removeDuplicates } from '../../transformations/removeDuplicates';

describe('removeDuplicates', () => {
  it('removes duplicate words', () => {
    assert.strictEqual(removeDuplicates('foo bar foo'), 'foo bar');
  });
  it('returns input if no duplicates', () => {
    assert.strictEqual(removeDuplicates('foo bar'), 'foo bar');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => removeDuplicates(123 as any), /Input must be a string/);
  });
});
