import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { writeResultAction, clearExpressionAction, writeExpressionAction } from "../store/actions/calculatorAction";
import calculateExpression from "../utils/calculateExpression";

const useCalculator = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { expression, result } = useSelector((state: RootState) => state.calculator);

    const writeExpression = (value: string) => {
        dispatch(writeExpressionAction(value));
    };

    const clearExpression = () => {
        dispatch(clearExpressionAction());
    };

    const calculateResult = () => {
        try {
            const evaluatedResult = calculateExpression(expression);
            dispatch(writeResultAction(evaluatedResult.toString()));
        } catch {
            dispatch(writeResultAction('Error'));
        }
    };

    return {
        expression,
        result,
        writeExpression,
        clearExpression,
        calculateResult
    };
};

export default useCalculator;
