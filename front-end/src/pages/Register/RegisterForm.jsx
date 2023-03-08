import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
import axiosRequest from '../../utils/axios';
import { POST_STATUS_OK } from '../../utils/statusCodes';

const MIN_PASSWORD_CHARACTERS = 6;
const MIN_NAME_CHARACTERS = 12;
const REGEXP_EMAIL = /\S+@\S+\.\S+/;

const SRegister = styled.div`
  ${tw`
    flex
    flex-col
    gap-2
    font-bold
    border
    rounded
    text-white
    p-6
  `}
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 197, 0);
  border-color: rgb(255, 197, 0);
`;

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    p-10
    gap-4
  `}
  width: 35vh;
  color: black;
  border-radius: 15px;
  background-color: rgba(204, 156, 0, 0.486);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  align-items: center;

  input {
    background: rgb(255, 255, 255);
    border: 1px solid #33333354;
    border-radius: 8px;
    color: rgb(51, 51, 51);
    font-size: 16px;
    width: 18rem;
    height: 2rem;
    font-weight: lighter;
    padding: 0.5rem;
      &::placeholder{
        font-size: 0.8rem;
      }
  }

  button {
    cursor: pointer;
    width: 12rem;
    height: 1.8rem;
    background-color: #333333;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: lighter;
      &:hover {
      color: rgb(255, 197, 0);
    }

  }
`;

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [wrongRegister, setWrongRegister] = useState(false);
  const axios = axiosRequest();
  const navigate = useNavigate();

  const redirect = (status) => {
    if (status === POST_STATUS_OK) return navigate('/customer/products');
    console.log(`erro: status ${status} sem resposta`);
  };

  const handleRequest = (result) => {
    const { status } = result;
    if (status === POST_STATUS_OK) {
      redirect(status);
    }
    return null;
  };

  const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
  && REGEXP_EMAIL.test(email)
  && (name.length >= MIN_NAME_CHARACTERS);

  return (
  <SRegister>

    <SForm
      onSubmit={ async (e) => {
        e.preventDefault();
        try {
          handleRequest(await axios.post(
            '/register',
            { name, email, password: pw, role: 'customer',
            },
          ));
        } catch (err) {
          setWrongRegister(true);
          console.log(err);
        }
      } }
    >
      <Input
        onChange={ (e) => { setName(e.target.value); } }
        value={ name }
        name="Nome"
        datatestId="common_register__input-name"
        placeHolder="Nome e Sobrenome"
      />
      <Input
        onChange={ (e) => { setEmail(e.target.value); } }
        value={ email }
        name="Email"
        type="email"
        datatestId="common_register__input-email"
        placeHolder="E-mail"
      />
      <Input
        onChange={ (e) => { setPw(e.target.value); } }
        value={ pw }
        name="Password"
        type="password"
        datatestId="common_register__input-password"
        placeHolder="Senha"
      />
      <Button
        name="CADASTRAR"
        datatestId="common_register__button-register"
        disabled={ !isValid }
      />

      {
        wrongRegister && <ErrorMessage
          message="Ops! E-mail já cadastrado"
          datatestId="common_register__element-invalid_register"
        />
      }

    </SForm>
  </SRegister>
  );
}
