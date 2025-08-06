export const VariableType = {
    STRING: 'string',
    NUMERIC: 'numeric',
    BOOLEAN: 'boolean'
} as const;

export type VariableType = typeof VariableType[keyof typeof VariableType];