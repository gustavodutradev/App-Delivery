import PropTypes from 'prop-types';
import React from 'react';

function ErrorMessage(props) {
  const { message, datatestId } = props;
  return (
    <div data-testid={ datatestId }>
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  datatestId: PropTypes.string.isRequired,
};

export default ErrorMessage;
