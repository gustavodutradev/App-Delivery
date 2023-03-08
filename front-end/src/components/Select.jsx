import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Option from './Option';

const SSelect = styled.label`
  ${tw`
    flex
    flex-col
    p-2
  `}

  span {
    ${tw`
      mb-0.5
    `}
  }

  select {
    width: 100%;
    height: 2em;
  }
`;

function Select(props) {
  const { name, value, onChange, options, className } = props;
  return (
    <SSelect className={ className }>
      <span>{name}</span>
      <select value={ value } onChange={ onChange }>
        {options.map((e, i) => (
          <Option key={ i } name={ e.name } value={ e.value } />
        ))}
      </select>
    </SSelect>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

export default Select;
