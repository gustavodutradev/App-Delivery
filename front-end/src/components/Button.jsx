import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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

function Button(p) {
  const { type, onClick, datatestId, disabled, name } = p;
  return (
    <SButton
      type={ type || 'submit' }
      onClick={ onClick }
      datatest-id={ datatestId }
      disabled={ disabled }
    >
      {name}
    </SButton>
  );
}

export default Button;
