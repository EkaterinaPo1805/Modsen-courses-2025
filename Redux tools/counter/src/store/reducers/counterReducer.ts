import { createReducer } from '@reduxjs/toolkit';
import { clearCounter, decrementCounter, incrementCounter } from '../actions/counterAction';

interface CounterState {
	count: number;
  }

const initialState: CounterState = {
    count: 0
};

const counterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(incrementCounter, (state) => ({
			...state,
			count: state.count + 1,
	  	}))
	  	.addCase(decrementCounter, (state) => ({
			...state,
			count: state.count - 1,
	  	}))
	  	.addCase(clearCounter, (state) => ({
			...state,
			count: 0,
	  	}));
  	});

export default counterReducer;
