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
import logo from '../../images/appdeliverylogo.png';

const SLogin = styled.div`
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

  img {
    width: 40rem;
    height: 40rem;
  }
`;

const SFormHeader = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    content-center
    p-4
  `}
  color: #333;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  position: fixed;
  top: 2rem;
`;

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    p-10
    gap-4
  `}
  width: 350px;
  color: black;
  border-radius: 15px;
  background-color: rgba(204, 156, 0, 0.486);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  align-items: center;
  margin-top: 8rem;
  
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

    h1 {
      text-align: center;
      color: rgb(51, 51, 51);
      font-weight: bold;
      font-size: 100px;
    }
    p {
      text-align: center;
      color: rgb(51, 51, 51);
      font-weight: lighter;
    }
  }
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
    <SLogin>
      <SFormHeader>
        <h1>Chegou o seu novo app de delivery com bebidas sempre geladas!</h1>
        <p>Venha gelar a goela com a gente também!</p>
     </SFormHeader>
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
        placeHolder="E-mail"
      />
      <Input
        onChange={ (e) => { setPw(e.target.value); } }
        value={ pw }
        name="Senha"
        type="password"
        datatestId="common_login__input-password"
        placeHolder="Senha"
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
    </SLogin>
  );
}
