import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isEmail } from '../../validations/isEmail';

describe('isEmail', () => {
  it('returns true for valid emails', () => {
    assert.strictEqual(isEmail('foo@bar.com'), true);
  });
  it('returns false for invalid emails', () => {
    assert.strictEqual(isEmail('foo@bar'), false);
    assert.strictEqual(isEmail(''), false);
  });
});
