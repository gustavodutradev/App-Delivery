import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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

  it('should disable the login button when email or password are invalid', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const loginButton = getByTestId(BTN_LOGIN);

    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(loginButton).toBeDisabled();
  });

  it('should call the handleRequest func when the login button is clicked', async () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const loginButton = getByTestId(BTN_LOGIN);
    const pushPageCustom = jest.fn();
    fireEvent.change(emailInput, { target: { value: EMAIL_TEST } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
    expect(pushPageCustom).toHaveBeenCalled();
  });

  it.skip('should show an error message when the login fails', async () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId(INPUT_EMAIL);
    const passwordInput = getByTestId(INPUT_PASSWORD);
    const loginButton = getByTestId(BTN_LOGIN);

    fireEvent.change(emailInput, { target: { value: EMAIL_TEST } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(loginButton);

    const errorMessage = await waitFor(() => {
      getByTestId('common_login__element-invalid-email');
    });
    expect(errorMessage).toBeInTheDocument();
  });
});
