import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatPhone } from '../../formatting/phone';

describe('formatPhone', () => {
  it('formats US phone', () => {
    assert.strictEqual(formatPhone('1234567890', 'us'), '(123) 456-7890');
  });
  it('formats international phone', () => {
    assert.strictEqual(formatPhone('911234567890', 'international'), '+91 (123) 456-7890');
  });
  it('formats IN phone (10 digits)', () => {
    assert.strictEqual(formatPhone('9876543210', 'in'), '+91-98765-43210');
  });
  it('formats IN phone (12 digits, starts with 91)', () => {
    assert.strictEqual(formatPhone('919876543210', 'in'), '+91-98765-43210');
  });
  it('returns input if format does not match', () => {
    assert.strictEqual(formatPhone('123', 'us'), '123');
  });
});
