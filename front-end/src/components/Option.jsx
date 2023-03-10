import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SOption = styled.option`
`;

function Option(props) {
  const { name, value } = props;
  return (
    <SOption
      value={ value }
    >
      {name}
    </SOption>
  );
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Option;
