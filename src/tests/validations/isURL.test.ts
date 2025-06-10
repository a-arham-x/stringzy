import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isURL } from '../../validations/isURL';

describe('isURL', () => {
  it('returns true for valid URLs', () => {
    assert.strictEqual(isURL('https://example.com'), true);
    assert.strictEqual(isURL('http://localhost:3000'), true);
  });
  it('returns false for invalid URLs', () => {
    assert.strictEqual(isURL('not a url'), false);
    assert.strictEqual(isURL(''), false);
  });
});
