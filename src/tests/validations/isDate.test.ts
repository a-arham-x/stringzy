import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isDate } from '../../validations/isDate';

describe('isDate', () => {
  it('returns true for YYYY-MM-DD', () => {
    assert.strictEqual(isDate('2020-12-31'), true);
  });
  it('returns true for MM-DD-YYYY', () => {
    assert.strictEqual(isDate('12-31-2020'), true);
  });
  it('returns true for DD/MM/YYYY', () => {
    assert.strictEqual(isDate('31/12/2020'), true);
  });
  it('returns false for invalid date', () => {
    assert.strictEqual(isDate('2020-13-01'), false);
    assert.strictEqual(isDate('not a date'), false);
  });
  it('returns false for non-string input', () => {
    assert.strictEqual(isDate(123 as any), false);
  });
});
