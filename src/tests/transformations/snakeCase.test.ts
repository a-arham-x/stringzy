import { describe, it } from 'node:test';
import assert from 'node:assert';
import { snakeCase } from '../../transformations/snakeCase';

describe('snakeCase', () => {
  it('converts text to snake_case', () => {
    assert.strictEqual(snakeCase('hello world'), 'hello_world');
  });
  it('handles camelCase', () => {
    assert.strictEqual(snakeCase('helloWorld'), 'hello_world');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(snakeCase(null as any), '');
  });
});
