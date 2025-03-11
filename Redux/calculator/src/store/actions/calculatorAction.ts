import { createAction } from "@reduxjs/toolkit"

export const writeExpressionAction = createAction<string>('writeExpression')
export const clearExpressionAction = createAction('clearExpression')
export const writeResultAction = createAction<string>('calculateResult')
