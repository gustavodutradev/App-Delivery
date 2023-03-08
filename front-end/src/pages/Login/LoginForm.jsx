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
  background-color: #FC0;
  border-color: #FC0;

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
    rounded
    p-10
    gap-4
  `}
  width: 35vh;
  color: black;
  background-color: #edededc5;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  align-items: center;
  border: 1px solid #33333354;
  
  input {
    border: 1px solid #00000058;
    width: 16rem;
    height: 1.8rem;
    font-weight: lighter;
    padding: 0.5rem;
  }

  button {
    width: 12rem;
    height: 1.8rem;
    background-color: #333333;
    border: 1px solid #FC0;
    color: #FC0;
    border-radius: 10px;
    font-weight: lighter;
      &:hover {
      background-color:#FC0;
      border: 1px solid #333333;
      color: #333333;
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
        <h4>Faça seu login e venha gelar a goela com a gente também! :)</h4>
     </SFormHeader>
     {/* <img src= { logo } alt="logo-delivery"/> */}
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
    </SLogin>
  );
}
