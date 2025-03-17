import { useSelector } from "react-redux";
import Button from "../../comonents/Button";
import { Wrapper, Output, Page, Counter } from "./styled";
import { RootState } from "../../store";

const CounterPage: React.FC = () => {
    const buttons = ['Decrement', 'Increment', 'Clear'];
    const count = useSelector((state: RootState) => state.count);

    return (
        <Page>
            <Wrapper>
                <Counter>
                    <Button children={buttons[0]}/>
                    <Output>{count}</Output>
                    <Button children={buttons[1]}/>
                </Counter>
                <Button children={buttons[2]} />
            </Wrapper>
        </Page>
    )
};

export default CounterPage;