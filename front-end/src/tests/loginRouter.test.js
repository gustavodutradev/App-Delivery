import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWith from './renderWith';

describe('Testa a tela de Login', () => {
  it('Verifica se possui um formulario de login', () => {
    renderWith(<App />);

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });
    const register = screen.getByRole('button', { name: /ainda não tenho conta/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });
});
