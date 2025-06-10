import { describe, it } from 'node:test';
import assert from 'node:assert';
import { pascalCase } from '../../transformations/pascalCase';

describe('pascalCase', () => {
  it('converts text to PascalCase', () => {
    assert.strictEqual(pascalCase('hello world'), 'HelloWorld');
  });
  it('handles empty string', () => {
    assert.strictEqual(pascalCase(''), '');
  });
  it('returns empty string for null', () => {
    assert.strictEqual(pascalCase(null as any), '');
  });
});
