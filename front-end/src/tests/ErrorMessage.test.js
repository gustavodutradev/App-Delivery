import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage component', () => {
  test('renders error message correctly', () => {
    const errorMessage = 'This is an error message';
    const { getByTestId } = render(
      <ErrorMessage message={ errorMessage } datatestId="error-message" />,
    );
    const messageElement = getByTestId('error-message');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveTextContent(errorMessage);
  });
});
