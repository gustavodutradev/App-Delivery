import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axiosRequest from '../../utils/axios';

type Props = {
};

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    content-center
    
  `}
`;

const LoginForm = (p: Props) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const axios = axiosRequest();
  const navigate = useNavigate();

  const MIN_PASSWORD_CHARACTERS = 6;
  const REGEXP_EMAIL = /\S+@\S+\.\S+/;

  const redirect = (status: number) => {
    if (status === 201) navigate('/');
    console.log(`erro: status ${status} sem resposta`);
  };

  const isValid = (pw.length > MIN_PASSWORD_CHARACTERS) && REGEXP_EMAIL.test(email);


  return (
    <SForm
      onSubmit={ async (e) => {
        e.preventDefault();
        const result = await axios.post('/login');
        redirect(result.status)
      } }
    >
      <Input 
        onChange={(e) => { setEmail(e.target.value); }}
        value={ email }
        name={ 'Login' }
        type={ 'email' }
        datatestId= 'common_login__input-email'
      />
      <Input 
        onChange={(e) => { setPw(e.target.value); }}
        value={ pw }
        name={ 'Senha' }
        type={ 'password' }
        datatestId= 'common_login__input-password'
      />
      <Button
        name='LOGIN'
        datatestId= 'common_login__button-login'
        disabled={ !isValid }
      />
      <Button
        name= 'Ainda não tenho conta'
        datatestId='common_login__button-register'
        type="button"
        onClick={ () => { navigate('/register'); } }
      />
    </SForm>
  );
};

export default LoginForm;
