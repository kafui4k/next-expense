import styled from '@emotion/styled';
import React from 'react';

export const ButtonC = styled.button`
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    border: none;
    height: 50px;
    width: 50%;
    background: #373B64;
    color: white;
`;

function Button({children}: any) {
  return (
      <ButtonC>
            {children}
        </ButtonC>
  )
}

export default Button