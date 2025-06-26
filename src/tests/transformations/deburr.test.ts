import { describe, it } from 'node:test';
import assert from 'node:assert';
import { deburr } from '../../transformations/deburr';

describe('deburr', () => {
  it('removes accents and diacritics', () => {
    assert.strictEqual(deburr('déjà vu'), 'deja vu');
    assert.strictEqual(deburr('Élève'), 'Eleve');
    assert.strictEqual(deburr('São Paulo'), 'Sao Paulo');
    assert.strictEqual(deburr('über cool'), 'uber cool');
  });

  it('returns the original string if no accents present', () => {
    assert.strictEqual(deburr('hello world'), 'hello world');
  });

  it('returns empty string if input is empty', () => {
    assert.strictEqual(deburr(''), '');
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => deburr(123 as any), /Input must be a string/);
    assert.throws(() => deburr(null as any), /Input must be a string/);
    assert.throws(() => deburr(undefined as any), /Input must be a string/);
  });
});
