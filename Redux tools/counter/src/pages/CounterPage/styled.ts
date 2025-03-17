import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dedede;
    background-color: #fafafa;
    padding: 32px;
    gap: 24px;
    border-radius: 24px;
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const Output = styled.div`
    font-size: 32px;
`;