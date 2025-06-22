import {describe, it} from "node:test";
import assert from "node:assert";
import {stringSimilarity} from "../../analyzing/stringSimilarity";

describe('stringSimilarity', () => {
    it('String similarity: first case - 100%', () => {
        assert.strictEqual(stringSimilarity('abc', 'abc'), 100.0);
    });

    it('String similarity: second case - 100% for empty strings', () => {
        assert.strictEqual(stringSimilarity('', ''), 100.0);
    });

    it('String similarity: case 0% for empty vs non-empty', () => {
        assert.strictEqual(stringSimilarity('abc', ''), 0.0);
    });

    it('String similarity: one character different (should be ~66.67%)', () => {
        assert.strictEqual(stringSimilarity('abc', 'abd'), 66.67);
    });

    it('String similarity: different lengths (abc vs abcde)', () => {
        assert.strictEqual(stringSimilarity('abc', 'abcde'), 60.0);
    });

    it('String similarity: transposed letters (ab vs ba)', () => {
        assert.strictEqual(stringSimilarity('ab', 'ba'), 50.0);
    });

    it('String similarity: same letters, different case (case-sensitive)', () => {
        assert.strictEqual(stringSimilarity('ABC', 'abc'), 0.0);
    });

    it('String similarity: long strings with one character removed', () => {
        assert.strictEqual(stringSimilarity('abcdefghijklmnopqrst', 'abcdefghijklmnoqrst'), 95.0);
    });

    it('throws if first argument is not a string', () => {
        assert.throws(() => stringSimilarity(123 as any, 'abc'), /Both arguments must be strings/i);
    });

    it('throws if second argument is not a string', () => {
        assert.throws(() => stringSimilarity('abc', null as any), /Both arguments must be strings/i);
    });
});
