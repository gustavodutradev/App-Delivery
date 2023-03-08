import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';

const SSelect = styled.label`
`;

function Select(props) {
  const { name, value, onChange, options } = props;
  return (
    <SSelect>
      {name}
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
};

export default Select;
