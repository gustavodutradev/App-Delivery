import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axiosRequest from '../../utils/axios';
import ErrorMessage from '../../components/ErrorMessage';

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    content-center
    
  `}
`;

const OK = 200;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [wrongLogin, setWrongLogin] = useState(false);
  const axios = axiosRequest();
  const navigate = useNavigate();

  const setToken = (token) => localStorage.setItem('token', token);
  const setUserName = (username) => localStorage.setItem('user', username);

  const MIN_PASSWORD_CHARACTERS = 6;
  const REGEXP_EMAIL = /\S+@\S+\.\S+/;

  const redirect = (status) => {
    if (status === OK) return navigate('/customer/products');
    console.log(`erro: status ${status} sem resposta`);
  };

  const handleRequest = (result) => {
    const { status, data: { token, name } } = result;
    console.log(result);
    if (status === OK) {
      setToken(token);
      setUserName(name);
      redirect(status);
    }
    return null;
  };

  const isValid = (pw.length > MIN_PASSWORD_CHARACTERS) && REGEXP_EMAIL.test(email);

  return (
    <SForm
      onSubmit={ async (e) => {
        e.preventDefault();
        try {
          handleRequest(await axios.post('/login', { email, password: pw }));
        } catch (err) {
          setWrongLogin(true);
          console.log(err);
        }
      } }
    >
      <Input
        onChange={ (e) => { setEmail(e.target.value); } }
        value={ email }
        name="Login"
        type="email"
        datatestId="common_login__input-email"
      />
      <Input
        onChange={ (e) => { setPw(e.target.value); } }
        value={ pw }
        name="Senha"
        type="password"
        datatestId="common_login__input-password"
      />
      <Button
        name="LOGIN"
        datatestId="common_login__button-login"
        disabled={ !isValid }
      />
      <Button
        name="Ainda não tenho conta"
        datatestId="common_login__button-register"
        type="button"
        onClick={ () => { navigate('/register'); } }
      />

      {
        wrongLogin && <ErrorMessage
          message="Ops! Verifique seu e-mail ou senha"
          datatest-id="common_login__element-invalid-email"
        />
      }

    </SForm>
  );
}
