import { isNotNullOrUndefined } from "./basic"

export const isNumber = (value: unknown): value is number => isNotNullOrUndefined(value) && (typeof value === "number" || value instanceof Number)
export const isInteger = (value: unknown): value is number => isNumber(value) && Number.isInteger(value)

export const isFloat = (value: unknown): value is number => isNumber(value) && !Number.isInteger(value)

export const isPositive = (value: unknown): value is number => isNumber(value) && value > 0
export const isNegative = (value: unknown): value is number => isNumber(value) && value < 0
export const isZero = (value: unknown): value is number => isNumber(value) && value === 0

export const isFiniteNumber = (value: unknown): value is number => isNumber(value) && Number.isFinite(value)
export const isNaNValue = (value: unknown): value is number => isNumber(value) && Number.isNaN(value)
export const isInfinite = (value: unknown): value is number => isNumber(value) && !Number.isFinite(value)
