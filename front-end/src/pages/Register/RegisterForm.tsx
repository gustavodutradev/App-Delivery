import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';
import axiosRequest from '../../utils/axios';
import { AxiosResponse } from 'axios';

type Props = {
};

const MIN_PASSWORD_CHARACTERS = 6;
const MIN_NAME_CHARACTERS = 12;
const REGEXP_EMAIL = /\S+@\S+\.\S+/;

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    content-center
    
  `}
`;

const RegisterForm = (p: Props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [wrongRegister, setWrongRegister] = useState(false);
  const axios = axiosRequest();
  const navigate = useNavigate();

  const redirect = (status: number) => {
    if (status === 201) return navigate('/customer/products');
    console.log(`erro: status ${status} sem resposta`);
  };

  const handleRequest = (result: AxiosResponse) => {
    const { status, data: { token } } = result;
    if(status === 200) {
      redirect(status);
    }
    return null;
  }

  const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
  && REGEXP_EMAIL.test(email)
  && (name.length >= MIN_NAME_CHARACTERS);

  return (
    <SForm
    onSubmit={ async (e) => {
      e.preventDefault();
      try {
        handleRequest(await axios.post('/register', { name, email, password: pw, role: "customer" }));
      } catch (err: unknown) {
        setWrongRegister(true);
        console.log(err);
      }
    } }
    >
        <Input
        onChange= {(e) => { setName(e.target.value); }}
        value= { name }
        name= {'Nome'}
        datatestId= "common_register__input-name"
        />
      <Input 
        onChange={(e) => { setEmail(e.target.value); }}
        value={ email }
        name={ 'Email' }
        type={ 'email' }
        datatestId= "common_register__input-email"
      />
      <Input 
        onChange={(e) => { setPw(e.target.value); }}
        value={ pw }
        name={ 'Password' }
        type={ 'password' }
        datatestId= "common_register__input-password"
      />
      <Button
        name='CADASTRAR'
        datatestId="common_register__button-register"
        disabled= { !isValid }
      />

{
  wrongRegister ? 
    <ErrorMessage
    datatestId= 'common_register__element-invalid_register'
    message= { "Ops! E-mail já cadastrado" }
  /> 
  :
  null
}
    </SForm>
  );
};

export default RegisterForm;
