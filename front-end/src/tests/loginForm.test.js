import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import * as reactRouter from 'react-router';
import LoginForm from '../pages/Login/LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useNavigate').mockImplementation(() => jest.fn());
  });

  const INPUT_EMAIL = 'common_login__input-email';
  const INPUT_PASSWORD = 'common_login__input-password';
  const BTN_LOGIN = 'common_login__button-login';
  const BTN_REGISTER = 'common_login__button-register';
  const EMAIL_TEST = 'test@test.com';

  it('should render the login form', () => {
    const { getByTestId } = render(<LoginForm />);
    expect(getByTestId(INPUT_EMAIL)).toBeInTheDocument();
    expect(getByTestId(INPUT_PASSWORD)).toBeInTheDocument();
    expect(getByTestId(BTN_LOGIN)).toBeInTheDocument();
    expect(getByTestId(BTN_REGISTER)).toBeInTheDocument();
  });

  it('should enable the login button when email and password are valid', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const loginButton = getByTestId(BTN_LOGIN);

    fireEvent.change(emailInput, { target: { value: EMAIL_TEST } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(loginButton).toBeEnabled();
  });

  it('disables the login button when either email or password is invalid', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const loginButton = getByTestId(BTN_LOGIN);

    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(loginButton).toBeDisabled();
  });
  it('should show an error message when login is invalid', async () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginButton = getByTestId('common_login__button-login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    fireEvent.click(loginButton);

    await waitFor(() => {
      const invalidEmailElement = screen
        .getByTestId('common_login__element-invalid-email');
      expect(invalidEmailElement).toBeInTheDocument();
      expect(invalidEmailElement.textContent).toBe('Ops! Verifique seu e-mail ou senha');
    });
  });
});
