import { describe, it } from 'node:test';
import assert from 'node:assert';
import { kebabCase } from '../../transformations/kebabCase';

describe('kebabCase', () => {
  it('converts text to kebab-case', () => {
    assert.strictEqual(kebabCase('hello world'), 'hello-world');
  });
  it('handles camelCase', () => {
    assert.strictEqual(kebabCase('helloWorld'), 'hello-world');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(kebabCase(null as any), '');
  });
});
