import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dedede;
    background-color: #ffffff;
    width: 64px;
    padding: 8px;
    border-radius: 4px;
    font-size: 20px;

    &:hover {
     background-color: #dedede;
    }

    &:active {
     background-color: #cccbcb;
    }
`;