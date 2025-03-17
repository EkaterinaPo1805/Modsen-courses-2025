import styled from 'styled-components';

export const ButtonWrapper = styled.button<{$children: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ $children }) =>
        $children === 'Increment'
                ? '#0ee246'
                :  $children === 'Decrement'
                ? '#e20e0e'
                : '#ffffff'};
    padding: 8px;
    border-radius: 4px;
    border: none;
    width: ${({ $children }) =>
        $children === 'Clear'
                ? 'auto' : '90px'};
    font-size: 16px;

    &:hover {
        background-color: ${({ $children }) =>
            $children === 'Increment'
                ? '#10d244'
                :  $children === 'Decrement'
                ? '#d21010'
                : '#ededed'};
    }

    &:active {
        background-color: ${({ $children }) =>
            $children === 'Increment'
                ? '#0cbc3b'
                :  $children === 'Decrement'
                ? '#bc0c0c'
                : '#c8c8c8'};
    }
`;