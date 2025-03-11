import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dedede;
    background-color: #fafafa;
    padding: 32px;
    gap: 24px;
    width: 280px;
    border-radius: 24px;
`;

export const CalculatorButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:8px;
`;

export const Output = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 12px;
    height: 40px;
    border: 1px solid #dedede;
    background-color: #ffffff;
    border-radius: 8px;
`;