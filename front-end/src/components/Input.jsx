import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SInput = styled.label`
  ${tw`
    text-center
    flex
    flex-col
    p-2
    font-bold
  `}
  border-color: 'grey';
  span {
    ${tw`
      mb-0.5
    `}
  }
  input {
    ${tw`
      m-1
      border
      rounded
    `}
  }
`;

function Input(p) {
  const { name, type, onChange, value, datatestId } = p;
  return (
    <SInput>
      <span>{name}</span>
      <input
        type={ type || 'text' }
        onChange={ onChange }
        value={ value }
        data-testid={ datatestId }
      />
    </SInput>
  );
}

export default Input;
