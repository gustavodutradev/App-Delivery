import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as reactRouter from 'react-router';
import RegisterForm from '../pages/Register/RegisterForm';

describe('RegisterForm', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useNavigate').mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call useNavigate', () => {
    render(
      <MemoryRouter initialEntries={ ['/register'] }>
        <RegisterForm />
      </MemoryRouter>,
    );

    expect(reactRouter.useNavigate).toHaveBeenCalled();
  });
});

describe('redirect', () => {
  describe('RegisterForm', () => {
    const redirect = (status, navigate) => {
      if (status === 'REGISTER_OK') return navigate('/customer/products');
      console.log(`erro: status ${status} sem resposta`);
    };

    it('should log an error when status is not REGISTER_OK', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const navigateMock = jest.fn();
      const status = 'unknown_status';
      redirect(status, navigateMock);
      expect(consoleSpy).toHaveBeenCalledWith(`erro: status ${status} sem resposta`);
    // consoleSpy.mockRestore();
    });
    it('should return true when email, name and password are valid', () => {
      const MIN_PASSWORD_CHARACTERS = 6;
      const MIN_NAME_CHARACTERS = 12;
      const REGEXP_EMAIL = /\S+@\S+\.\S+/;
      const email = 'test@example.com';
      const name = 'Test User';
      const pw = '12345678';
      const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
            && REGEXP_EMAIL.test(email)
      && (name.length >= MIN_NAME_CHARACTERS);
      expect(isValid).toBe(true);
    });

    it('should return false when email is invalid', () => {
      const email = 'invalid-email';
      const name = 'Test User';
      const pw = '12345678';
      const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
      && REGEXP_EMAIL.test(email)
      && (name.length >= MIN_NAME_CHARACTERS);
      expect(isValid).toBe(false);
    });

    it('should return false when name is too short', () => {
      const email = 'test@example.com';
      const name = 'Usr';
      const pw = '12345678';
      const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
      && REGEXP_EMAIL.test(email)
      && (name.length >= MIN_NAME_CHARACTERS);
      expect(isValid).toBe(false);
    });
  });
});
