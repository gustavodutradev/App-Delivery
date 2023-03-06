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

function Input(props) {
  const { name, type, onChange, value, datatestId } = props;
  return (
    <SInput>
      <span>{name}</span>
      <input
        type={ type }
        onChange={ onChange }
        value={ value }
        datatest-id={ datatestId }
      />
    </SInput>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  datatestId: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  datatestId: '',
};

export default Input;
