import React from 'react';

function ErrorMessage(p) {
  const { message } = p;
  return (
    <div>
      {message}
    </div>
  );
}

export default ErrorMessage;
