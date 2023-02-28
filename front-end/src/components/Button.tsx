import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  type?: 'submit' | 'button';
  onClick?: () => void;
  name?: string;
};

const SButton = styled.button`
  ${tw`
    justify-center
    flex
    m-1.5
    font-bold
    border
    rounded
    bg-gray-700
    text-white
    p-1
  `}
`;

const Button = (p: Props) => {
  return (
    <SButton
      type={ p.type || 'submit' }
      onClick={ p.onClick }
    >
      {p.name}
    </SButton>
  );
};

export default Button;
