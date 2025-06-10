import { describe, it } from 'node:test';
import assert from 'node:assert';
import { truncateText } from '../../transformations/truncateText';

describe('truncateText', () => {
  it('returns the original text if shorter than maxLength', () => {
    assert.strictEqual(truncateText('hello', 10), 'hello');
  });
  it('truncates and adds suffix if text is longer', () => {
    assert.strictEqual(truncateText('hello world', 5), 'he...');
  });
  it('truncates and adds custom suffix', () => {
    assert.strictEqual(truncateText('abcdef', 5, '--'), 'abc--');
  });
  it('returns only suffix if maxLength < suffix.length', () => {
    assert.strictEqual(truncateText('abcdef', 2), '...');
  });
  it('throws if text is not a string', () => {
    assert.throws(() => truncateText(123 as any, 5), /Input text must be a string/);
  });
  it('throws if maxLength is negative', () => {
    assert.throws(() => truncateText('abc', -1), /maxLength must be a non-negative number/);
  });
  it('throws if suffix is not a string', () => {
    assert.throws(() => truncateText('abc', 5, 123 as any), /Suffix must be a string/);
  });
});
