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
      <MemoryRouter initialEntries={ ['/customer/products'] }>
        <RegisterForm />
      </MemoryRouter>,
    );

    expect(reactRouter.useNavigate).toHaveBeenCalled();
  });
});
