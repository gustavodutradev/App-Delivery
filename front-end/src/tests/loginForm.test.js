import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render the login form', () => {
    const { getByTestId } = render(<LoginForm />);
    expect(getByTestId('common_login__input-email')).toBeInTheDocument();
    expect(getByTestId('common_login__input-password')).toBeInTheDocument();
    expect(getByTestId('common_login__button-login')).toBeInTheDocument();
    expect(getByTestId('common_login__button-register')).toBeInTheDocument();
  });

  it('should enable the login button when email and password are valid', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginButton = getByTestId('common_login__button-login');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(loginButton).toBeEnabled();
  });

  it('should disable the login button when email or password are invalid', () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginButton = getByTestId('common_login__button-login');

    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    expect(loginButton).toBeDisabled();
  });

  it('should call the handleRequest func when the login button is clicked', async () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginButton = getByTestId('common_login__button-login');
    const handleRequest = jest.fn();

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(handleRequest).toHaveBeenCalled());
  });

  it('should show an error message when the login fails', async () => {
    const { getByTestId } = render(<LoginForm />);
    const emailInput = getByTestId('common_login__input-email');
    const passwordInput = getByTestId('common_login__input-password');
    const loginButton = getByTestId('common_login__button-login');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(loginButton);

    const errorMessage = await waitFor(() => {
      getByTestId('common_login__element-invalid-email');
    });
    expect(errorMessage).toBeInTheDocument();
  });
});
