import React from 'react';
import { render } from '@testing-library/react';
import * as reactRouter from 'react-router';
import RegisterPage from '../pages/Register/RegisterPage';

describe('Register', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useNavigate').mockImplementation(() => jest.fn());
  });

  it('should render RegisterForm', () => {
    const { getByTestId } = render(<RegisterPage />);
    const registerFormElement = getByTestId('common_register__button-register');
    expect(registerFormElement).toBeInTheDocument();
  });
});
