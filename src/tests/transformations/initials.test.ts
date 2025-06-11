import { describe, it } from 'node:test';
import assert from 'node:assert';
import { initials } from '../../transformations/initials';

describe('initials', () => {
  it('returns initials for each word', () => {
    assert.strictEqual(initials('hello world'), 'hw');
  });
  it('limits initials if limit is set', () => {
    assert.strictEqual(initials('foo bar baz', 2), 'fb');
  });
  it('returns empty string for empty input', () => {
    assert.strictEqual(initials('', 2), '');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => initials(123 as any), /Input must be a string/);
  });
  it('throws if limit is negative', () => {
    assert.throws(() => initials('foo bar', -1), /Limit must be a non-negative number/);
  });
});
