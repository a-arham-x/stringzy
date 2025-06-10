import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatNumber } from '../../formatting/number';

describe('formatNumber', () => {
  it('formats number with default separator', () => {
    assert.strictEqual(formatNumber(1234567), '1,234,567');
  });
  it('formats string number with dot separator', () => {
    assert.strictEqual(formatNumber('1234567', '.'), '1.234.567');
  });
  it('returns single digit as is', () => {
    assert.strictEqual(formatNumber(7), '7');
  });
});
