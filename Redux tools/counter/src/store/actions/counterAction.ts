import { createAction } from '@reduxjs/toolkit';

export const incrementCounter = createAction('increment');
export const decrementCounter = createAction('decrement');
export const clearCounter = createAction('clear');
