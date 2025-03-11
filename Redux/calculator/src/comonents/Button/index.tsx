import useCalculator from "../../hooks/useCalculator";
import { ButtonWrapper } from "./styled";

const Button: React.FC<{children: string}> = ({children}) => {
    const { writeExpression, calculateResult, clearExpression } = useCalculator();

    const handleClick = () => {
        if (children === "=") {
            calculateResult();
        } else if (children === "AC") {
            clearExpression();
        } else {
            writeExpression(children);
        }
    };

    return (
        <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>
    )
}

export default Button;