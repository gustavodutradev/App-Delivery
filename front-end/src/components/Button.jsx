import PropTypes from 'prop-types';
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

function Button(props) {
  const { type, onClick, datatestId, disabled, name } = props;
  return (
    <SButton
      type={ type }
      onClick={ onClick }
      datatest-id={ datatestId }
      disabled={ disabled }
    >
      {name}
    </SButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  datatestId: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  disabled: false,
  datatestId: '',
};

export default Button;
