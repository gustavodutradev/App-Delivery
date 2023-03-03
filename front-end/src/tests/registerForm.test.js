import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<RegisterForm />);
    expect(getByTestId('common_register__input-name')).toBeInTheDocument();
    expect(getByTestId('common_register__input-email')).toBeInTheDocument();
    expect(getByTestId('common_register__input-password')).toBeInTheDocument();
    expect(getByTestId('common_register__button-register')).toBeInTheDocument();
  });

  test('should disable register button if inputs are invalid', () => {
    const { getByTestId } = render(<RegisterForm />);
    const nameInput = getByTestId('common_register__input-name');
    const emailInput = getByTestId('common_register__input-email');
    const passwordInput = getByTestId('common_register__input-password');
    const registerButton = getByTestId('common_register__button-register');

    // Fill invalid inputs
    fireEvent.change(nameInput, { target: { value: 'Short' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    // Check if button is disabled
    expect(registerButton).toBeDisabled();
  });

  test('should enable register button if inputs are valid', () => {
    const { getByTestId } = render(<RegisterForm />);
    const nameInput = getByTestId('common_register__input-name');
    const emailInput = getByTestId('common_register__input-email');
    const passwordInput = getByTestId('common_register__input-password');
    const registerButton = getByTestId('common_register__button-register');

    // Fill valid inputs
    fireEvent.change(nameInput, { target: { value: 'Full Name' } });
    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // Check if button is enabled
    expect(registerButton).toBeEnabled();
  });

  test('should handle successful registration', async () => {
    // Mock axios request
    const axiosMock = {
      post: jest.fn(() => Promise.resolve({ status: 201, data: { token: 'abc123' } })),
    };

    // Render component and fill inputs
    const { getByTestId } = render(<RegisterForm axiosRequest={ () => axiosMock } />);
    const nameInput = getByTestId('common_register__input-name');
    const emailInput = getByTestId('common_register__input-email');
    const passwordInput = getByTestId('common_register__input-password');
    const registerButton = getByTestId('common_register__button-register');
    fireEvent.change(nameInput, { target: { value: 'Full Name' } });
    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // Submit form
    fireEvent.click(registerButton);

    // Wait for axios request to resolve
    await act(async () => {
      await axiosMock.post.mock.results[0].value;
    });

    // Check if navigation was performed
    expect(navigate).toHaveBeenCalledWith('/customer/products');
  });
});
