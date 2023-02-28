import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  type?: 'submit' | 'button';
  onClick?: () => void;
  name?: string;
  datatestId: string;
  disabled?: boolean;
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
      datatest-id= { p.datatestId }
      disabled= { p.disabled }
    >
      {p.name}
    </SButton>
  );
};

export default Button;
