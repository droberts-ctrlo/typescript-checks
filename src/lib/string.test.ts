import { describe, it, expect } from "@jest/globals";
import { isEmptyString, isNotEmptyString, isString, isStringAndEmpty, isStringAndNotEmpty } from "./string";

describe("String Checks", () => {
    describe("isString", () => {
        it("should return true for string literals", () => {
            expect(isString("")).toBe(true);
            expect(isString("test")).toBe(true);
            expect(isString("hello")).toBe(true);
        });

        it("should return true for String objects", () => {
            expect(isString(new String("test"))).toBe(true);
            expect(isString(new String(""))).toBe(true);
        });

        it("should return false for non-string values", () => {
            expect(isString(123)).toBe(false);
            expect(isString(null)).toBe(false);
            expect(isString(undefined)).toBe(false);
            expect(isString({})).toBe(false);
        });
    });

    describe("isEmptyString", ()=>{
        it("should return true for empty string literals", () => {
            expect(isEmptyString("")).toBe(true);
        });

        it("should return false for non-empty string literals", () => {
            expect(isEmptyString("test")).toBe(false);
            expect(isEmptyString(" ")).toBe(false);
        });

        it("should return false for non-string values", () => {
            expect(isEmptyString(123)).toBe(false);
            expect(isEmptyString(null)).toBe(false);
            expect(isEmptyString(undefined)).toBe(false);
            expect(isEmptyString({})).toBe(false);
        });
    });

    describe("isNotEmptyString", () => {
        it("should return true for non-empty string literals", () => {
            expect(isNotEmptyString("test")).toBe(true);
            expect(isNotEmptyString("hello")).toBe(true);
        });

        it("should return false for empty string literals", () => {
            expect(isNotEmptyString("")).toBe(false);
        });

        it("should return false for non-string values", () => {
            expect(isNotEmptyString(123)).toBe(false);
            expect(isNotEmptyString(null)).toBe(false);
            expect(isNotEmptyString(undefined)).toBe(false);
            expect(isNotEmptyString({})).toBe(false);
        });
    });

    describe("isStringAndEmpty", () => {
        it("should return true for empty string literals", () => {
            expect(isStringAndEmpty("")).toBe(true);
        });

        it("should return false for non-empty string literals", () => {
            expect(isStringAndEmpty("test")).toBe(false);
            expect(isStringAndEmpty(" ")).toBe(false);
        });

        it("should return false for non-string values", () => {
            expect(isStringAndEmpty(123)).toBe(false);
            expect(isStringAndEmpty(null)).toBe(false);
            expect(isStringAndEmpty(undefined)).toBe(false);
            expect(isStringAndEmpty({})).toBe(false);
        });
    });

    describe("isStringAndNotEmpty", () => {
        it("should return true for non-empty string literals", () => {
            expect(isStringAndNotEmpty("test")).toBe(true);
            expect(isStringAndNotEmpty("hello")).toBe(true);
        });

        it("should return false for empty string literals", () => {
            expect(isStringAndNotEmpty("")).toBe(false);
        });

        it("should return false for non-string values", () => {
            expect(isStringAndNotEmpty(123)).toBe(false);
            expect(isStringAndNotEmpty(null)).toBe(false);
            expect(isStringAndNotEmpty(undefined)).toBe(false);
            expect(isStringAndNotEmpty({})).toBe(false);
        });
    });
})
