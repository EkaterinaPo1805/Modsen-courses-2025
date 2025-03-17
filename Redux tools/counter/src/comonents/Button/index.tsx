import useCounter from "../../hooks/useCounter";
import { ButtonWrapper } from "./styled";

const Button: React.FC<{children: string}> = ({children}) => {
    const handleClick = useCounter(children);

    return (
        <ButtonWrapper $children={children} onClick={handleClick}>{children}</ButtonWrapper>
    )
}

export default Button;