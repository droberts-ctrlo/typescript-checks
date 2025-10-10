import { describe, it, expect } from '@jest/globals';
import { isFiniteNumber, isFloat, isInfinite, isInteger, isNaNValue, isNegative, isNumber, isPositive, isZero } from "./number";

describe('Number type checks', () => {
    describe('isNumber', () => {
        it('should return true for numbers', () => {
            expect(isNumber(42)).toBe(true);
            expect(isNumber(0)).toBe(true);
            expect(isNumber(-1)).toBe(true);
        });

        it('should return false for non-number types', () => {
            expect(isNumber(null)).toBe(false);
            expect(isNumber(undefined)).toBe(false);
            expect(isNumber('string')).toBe(false);
            expect(isNumber({})).toBe(false);
            expect(isNumber([])).toBe(false);
        });

        it('should return true for Number objects', () => {
            expect(isNumber(new Number(42))).toBe(true);
        });

        it('should return false for non-Number objects', () => {
            expect(isNumber(new String('string'))).toBe(false);
            expect(isNumber(new Boolean(true))).toBe(false);
        });
    });

    describe('isInteger', () => {
        it('should return true for integers', () => {
            expect(isInteger(42)).toBe(true);
            expect(isInteger(-1)).toBe(true);
            expect(isInteger(0)).toBe(true);
        });

        it('should return false for floats', () => {
            expect(isInteger(3.14)).toBe(false);
            expect(isInteger(-2.5)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isInteger('string')).toBe(false);
            expect(isInteger(null)).toBe(false);
            expect(isInteger(undefined)).toBe(false);
        });
    });

    describe('isFloat', () => {
        it('should return true for floats', () => {
            expect(isFloat(3.14)).toBe(true);
            expect(isFloat(-2.5)).toBe(true);
        });

        it('should return false for integers', () => {
            expect(isFloat(42)).toBe(false);
            expect(isFloat(0)).toBe(false);
            expect(isFloat(-1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isFloat('string')).toBe(false);
            expect(isFloat(null)).toBe(false);
            expect(isFloat(undefined)).toBe(false);
        });
    });

    describe('isPositive', () => {
        it('should return true for positive numbers', () => {
            expect(isPositive(42)).toBe(true);
            expect(isPositive(0.1)).toBe(true);
        });

        it('should return false for zero and negative numbers', () => {
            expect(isPositive(0)).toBe(false);
            expect(isPositive(-1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isPositive('string')).toBe(false);
            expect(isPositive(null)).toBe(false);
            expect(isPositive(undefined)).toBe(false);
        });
    });

    describe('isNegative', () => {
        it('should return true for negative numbers', () => {
            expect(isNegative(-42)).toBe(true);
            expect(isNegative(-0.1)).toBe(true);
        });

        it('should return false for zero and positive numbers', () => {
            expect(isNegative(0)).toBe(false);
            expect(isNegative(1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isNegative('string')).toBe(false);
            expect(isNegative(null)).toBe(false);
            expect(isNegative(undefined)).toBe(false);
        });
    });

    describe('isZero', () => {
        it('should return true for zero', () => {
            expect(isZero(0)).toBe(true);
            expect(isZero(0.0)).toBe(true);
            expect(isZero(-0)).toBe(true);
        });

        it('should return false for non-zero numbers', () => {
            expect(isZero(42)).toBe(false);
            expect(isZero(-1)).toBe(false);
            expect(isZero(0.1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isZero('string')).toBe(false);
            expect(isZero(null)).toBe(false);
            expect(isZero(undefined)).toBe(false);
        });
    });

    describe('isFiniteNumber', () => {
        it('should return true for finite numbers', () => {
            expect(isFiniteNumber(42)).toBe(true);
            expect(isFiniteNumber(-1)).toBe(true);
            expect(isFiniteNumber(0)).toBe(true);
        });

        it('should return false for Infinity and NaN', () => {
            expect(isFiniteNumber(Infinity)).toBe(false);
            expect(isFiniteNumber(-Infinity)).toBe(false);
            expect(isFiniteNumber(NaN)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isFiniteNumber('string')).toBe(false);
            expect(isFiniteNumber(null)).toBe(false);
            expect(isFiniteNumber(undefined)).toBe(false);
        });
    });

    describe('isNaNValue', () => {
        it('should return true for NaN', () => {
            expect(isNaNValue(NaN)).toBe(true);
        });

        it('should return false for finite numbers', () => {
            expect(isNaNValue(42)).toBe(false);
            expect(isNaNValue(0)).toBe(false);
            expect(isNaNValue(-1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isNaNValue('string')).toBe(false);
            expect(isNaNValue(null)).toBe(false);
            expect(isNaNValue(undefined)).toBe(false);
        });
    });

    describe('isInfinite', () => {
        it('should return true for Infinity', () => {
            expect(isInfinite(Infinity)).toBe(true);
            expect(isInfinite(-Infinity)).toBe(true);
        });

        it('should return false for finite numbers', () => {
            expect(isInfinite(42)).toBe(false);
            expect(isInfinite(0)).toBe(false);
            expect(isInfinite(-1)).toBe(false);
        });

        it('should return false for non-number types', () => {
            expect(isInfinite('string')).toBe(false);
            expect(isInfinite(null)).toBe(false);
            expect(isInfinite(undefined)).toBe(false);
        });
    });
});
