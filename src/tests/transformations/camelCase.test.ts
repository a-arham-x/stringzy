import { describe, it } from 'node:test';
import assert from 'node:assert';
import { camelCase } from '../../transformations/camelCase';

describe('camelCase', () => {
  it('converts text to camelCase', () => {
    assert.strictEqual(camelCase('hello world'), 'helloWorld');
  });
  it('handles empty string', () => {
    assert.strictEqual(camelCase(''), '');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(camelCase(null as any), '');
  });
});
