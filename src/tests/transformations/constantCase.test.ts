import { describe, it } from 'node:test';
import assert from 'node:assert';
import { constantCase } from '../../transformations/constantCase';

describe('constantCase', () => {
  it('converts text to CONSTANT_CASE', () => {
    assert.strictEqual(constantCase('hello world'), 'HELLO_WORLD');
  });
  it('handles camelCase', () => {
    assert.strictEqual(constantCase('helloWorld'), 'HELLO_WORLD');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(constantCase(null as any), '');
  });
});
