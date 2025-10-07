import { describe, it, expect } from '@jest/globals';
import { isNotNull, isNotUndefined, isNull, isUndefined } from "./basic"

describe('Basic type checks', () => {
    it('should check if input is null', () => {
        expect(isNull(null)).toBe(true);
        expect(isNull(undefined)).toBe(false);
        expect(isNull(0)).toBe(false);
        expect(isNull('')).toBe(false);
    });

    it('should check if input is not null', () => {
        expect(isNotNull(null)).toBe(false);
        expect(isNotNull(undefined)).toBe(true);
        expect(isNotNull(0)).toBe(true);
        expect(isNotNull('')).toBe(true);
    });

    it('should check if input is undefined', () => {
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(null)).toBe(false);
        expect(isUndefined(0)).toBe(false);
        expect(isUndefined('')).toBe(false);
    });

    it('should check if input is not undefined', () => {
        expect(isNotUndefined(undefined)).toBe(false);
        expect(isNotUndefined(null)).toBe(true);
        expect(isNotUndefined(0)).toBe(true);
        expect(isNotUndefined('')).toBe(true);
    });
});
