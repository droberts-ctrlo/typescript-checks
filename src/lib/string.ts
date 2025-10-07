import { isNotNull, isNotUndefined } from "./basic"

export const isString = (value: unknown): value is string => isNotNull(value) && isNotUndefined(value) && (typeof value === "string" || value instanceof String)
export const isEmptyString = (value: unknown): value is string => isString(value) && value.length === 0
export const isNotEmptyString = (value: unknown): value is string => isString(value) && !isEmptyString(value)

export const isStringAndEmpty = (value: unknown): value is string => isString(value) && isEmptyString(value)
export const isStringAndNotEmpty = (value: unknown): value is string => isString(value) && isNotEmptyString(value)
