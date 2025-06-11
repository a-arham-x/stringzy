import { describe, it } from 'node:test';
import assert from 'node:assert';
import { complexity } from '../../analyzing/complexity';

describe('complexity', () => {
  it('returns 0s for empty string', () => {
    assert.deepStrictEqual(complexity(''), { score: 0, uniqueness: 0, length: 0 });
  });
  it('returns correct result for simple string', () => {
    const result = complexity('abc');
    assert.strictEqual(typeof result.score, 'number');
    assert.strictEqual(typeof result.uniqueness, 'number');
    assert.strictEqual(result.length, 3);
  });
  it('returns correct result for complex string', () => {
    const result = complexity('aA1!aA1!');
    assert.ok(result.score > 0);
    assert.ok(result.uniqueness > 0);
    assert.strictEqual(result.length, 8);
  });
  it('throws if input is not a string', () => {
    assert.throws(() => complexity(123 as any), /Input must be a string/);
  });
});
