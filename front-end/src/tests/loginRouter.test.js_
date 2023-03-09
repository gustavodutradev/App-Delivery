import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa a tela de Login', () => {
  it.skip('Verifica se possui um formulario de login', () => {
    render(<App />);

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
