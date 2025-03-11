import { createReducer } from "@reduxjs/toolkit";
import { writeResultAction, clearExpressionAction, writeExpressionAction } from "../actions/calculatorAction";

const initialState = {
    expression: '',
    result: '',
};


const calculatorReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(writeExpressionAction, (state, action) => {
			state.expression+=action.payload;
		})
		.addCase(clearExpressionAction, (state) => {
			state.expression='';
            state.result='';
		})
		.addCase(writeResultAction, (state, action) => {
            state.result=action.payload;
		});
});

export default calculatorReducer;
