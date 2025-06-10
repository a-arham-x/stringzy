import { describe, it } from 'node:test';
import assert from 'node:assert';
import { capitalize } from '../../formatting/capitalize';

describe('capitalize', () => {
  it('capitalizes each word', () => {
    assert.strictEqual(capitalize('hello world'), 'Hello World');
  });
  it('handles single word', () => {
    assert.strictEqual(capitalize('foo'), 'Foo');
  });
  it('handles empty string', () => {
    assert.strictEqual(capitalize(''), '');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => capitalize(123 as any), /Input must be a string/);
  });
});
