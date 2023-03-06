import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterForm from '../pages/Register/RegisterForm';

describe('RegisterForm', () => {
  jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
  }));

  const INPUT_EMAIL = 'common_register__input-email';
  const INPUT_NAME = 'common_register__input-name';
  const INPUT_PASSWORD = 'common_login__input-password';
  // const BTN_LOGIN = 'common_login__button-login';
  const BTN_REGISTER = 'common_login__button-register';

  test('should render correctly', () => {
    const { getByTestId } = render(<RegisterForm />);
    expect(getByTestId(INPUT_EMAIL)).toBeInTheDocument();
    expect(getByTestId(INPUT_NAME)).toBeInTheDocument();
    expect(getByTestId(INPUT_PASSWORD)).toBeInTheDocument();
    expect(getByTestId(BTN_REGISTER)).toBeInTheDocument();
  });

  test('should disable register button if inputs are invalid', () => {
    const { getByTestId } = render(<RegisterForm />);
    const nameInput = getByTestId(INPUT_NAME);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const registerButton = getByTestId(BTN_REGISTER);

    // Fill invalid inputs
    fireEvent.change(nameInput, { target: { value: 'Short' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    // Check if button is disabled
    expect(registerButton).toBeDisabled();
  });

  test('should enable register button if inputs are valid', () => {
    const { getByTestId } = render(<RegisterForm />);
    const nameInput = getByTestId(INPUT_NAME);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const registerButton = getByTestId(BTN_REGISTER);

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
    const { getByTestId } = render(<RegisterForm />);
    const nameInput = getByTestId(INPUT_NAME);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const registerButton = getByTestId(BTN_REGISTER);
    fireEvent.change(nameInput, { target: { value: 'Panda Name' } });
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
