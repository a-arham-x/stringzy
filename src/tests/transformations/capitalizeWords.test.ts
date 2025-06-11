import { describe, it } from 'node:test';
import assert from 'node:assert';
import { capitalizeWords } from '../../transformations/capitalizeWords';

describe('capitalizeWords', () => {
  it('capitalizes each word', () => {
    assert.strictEqual(capitalizeWords('hello world'), 'Hello World');
  });
  it('handles empty string', () => {
    assert.strictEqual(capitalizeWords(''), '');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => capitalizeWords(123 as any), /Invalid argument/);
  });
});
