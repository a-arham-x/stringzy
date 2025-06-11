import { describe, it } from 'node:test';
import assert from 'node:assert';
import { titleCase } from '../../transformations/titleCase';

describe('titleCase', () => {
  it('converts text to Title Case', () => {
    assert.strictEqual(titleCase('hello world'), 'Hello World');
  });
  it('handles empty string', () => {
    assert.strictEqual(titleCase(''), '');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(titleCase(null as any), '');
  });
});
