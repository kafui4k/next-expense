import styled from '@emotion/styled';
import React from 'react';

export const ButtonC = styled.button`
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
    height: 50px;
    width: 100%;
    background: transparent;
    color: white;
    text-align: start;
    cursor: pointer;
`;

function Button({children}: any) {
  return (
      <ButtonC>
            {children}
        </ButtonC>
  )
}

export default Button