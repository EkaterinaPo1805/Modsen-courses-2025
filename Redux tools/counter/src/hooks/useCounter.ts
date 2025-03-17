import { useDispatch, useSelector } from "react-redux";
import { clearCounter, decrementCounter, incrementCounter } from "../store/actions/counterAction";
import { AppDispatch, RootState } from "../store";

const useCounter = (children: string) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        if (children === 'Increment')
            dispatch(incrementCounter());
        else if (children === 'Decrement')
            dispatch(decrementCounter());
        else
            dispatch(clearCounter());
    };

    return handleClick;
};

export default useCounter;
