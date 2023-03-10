import PropTypes from 'prop-types';
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

function Input({ type, onChange, datatestId, placeHolder, name, value }) {
  // const { type, onChange, datatestId, placeHolder, name, value } = props;
  return (
    <SInput>
      <span>{name}</span>
      <input
        type={ type }
        onChange={ onChange }
        value={ value }
        data-testid={ datatestId }
        placeholder={ placeHolder }
      />
    </SInput>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  datatestId: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  datatestId: '',
  placeHolder: '',
};

export default Input;
