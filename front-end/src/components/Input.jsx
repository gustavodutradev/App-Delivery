import React from 'react';
import propTypes from 'prop-types';
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

function Input(props) {
  const { name, type, onChange, value, datatestId } = props;
  return (
    <SInput>
      <span>{name}</span>
      <input
        type={ type || 'text' }
        onChange={ onChange }
        value={ value }
        datatest-id={ datatestId }
      />
    </SInput>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  datatestId: propTypes.string.isRequired,
};

export default Input;
