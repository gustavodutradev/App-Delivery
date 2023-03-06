import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
import { setUser } from '../../redux/slices/userSlice';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    content-center
    
  `}
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [wrongLogin, setWrongLogin] = useState(false);

  const axios = axiosRequest();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const MIN_PASSWORD_CHARACTERS = 6;
  const REGEXP_EMAIL = /\S+@\S+\.\S+/;

  const redirect = (status) => {
    if (status === GET_STATUS_OK) return navigate('/customer/products');
    console.log(`erro: status ${status} sem resposta`);
  };

  const handleRequest = (result) => {
    const { status, data } = result;
    // console.log(result);
    if (status === GET_STATUS_OK) {
      dispatch(setUser(data));
      redirect(status);
    }
    return null;
  };

  const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS) && REGEXP_EMAIL.test(email);

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
          datatestId="common_login__element-invalid-email"
        />
      }

    </SForm>
  );
}
