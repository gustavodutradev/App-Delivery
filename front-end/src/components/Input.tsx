import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  type?: 'text' | 'number' | 'textarea' | 'password' | 'email';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  datatestId?: string;
};

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

const Input = (p: Props) => {
  return (
    <SInput>
      <span>{p.name}</span>
      <input
        type={ p.type || 'text' }
        onChange={ p.onChange }
        value={ p.value }
        datatest-id = { p.datatestId }
      />
    </SInput>
  );
};

export default Input;
