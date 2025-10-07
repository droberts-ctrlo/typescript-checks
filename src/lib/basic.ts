export const isNull = (value: unknown): value is null => value === null
export const isNotNull = (value: unknown): value is NonNullable<unknown> => !isNull(value)

export const isUndefined = (value: unknown): value is undefined => typeof value == "undefined" || value === undefined
export const isNotUndefined = (value: unknown): value is NonNullable<unknown> => !isUndefined(value)

export const isNotNullOrUndefined = (value: unknown): value is NonNullable<unknown> => isNotNull(value) && isNotUndefined(value)
