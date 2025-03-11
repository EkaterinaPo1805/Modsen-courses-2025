import Button from "../../comonents/Button";
import useCalculator from "../../hooks/useCalculator";
import { CalculatorButtons, CalculatorWrapper, Output, Page } from "./styled";

const CalculatorPage: React.FC = () => {
    const arrayOfButtons = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
    const { expression, result } = useCalculator();

    return (
        <Page>
            <CalculatorWrapper>
                <Output>{ result ? result : expression}</Output>
                <CalculatorButtons>
                    {arrayOfButtons.map((button, index) => (
                        <Button key={index} children={button}/>
                    ))}
                </CalculatorButtons>
            </CalculatorWrapper>
        </Page>
    )
};

export default CalculatorPage;