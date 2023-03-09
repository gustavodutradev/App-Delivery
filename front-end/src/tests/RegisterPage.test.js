import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '../pages/Register/RegisterForm';

describe('App', () => {
  test('renders App component with Routes', () => {
    render(
      <MemoryRouter initialEntries={ ['/register'] }>
        <RegisterForm />
      </MemoryRouter>,
    );
  });
});
