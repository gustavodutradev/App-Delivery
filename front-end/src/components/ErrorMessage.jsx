import React from 'react';

function ErrorMessage(p) {
  const { message, datatestId } = p;
  return (
    <div data-testid={ datatestId }>
      {message}
    </div>
  );
}

export default ErrorMessage;
