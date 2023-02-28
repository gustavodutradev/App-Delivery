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

  const redirect = (status: number) => {
    if (status === 201) navigate('/');
    console.log(`erro: status ${status} sem resposta`);
  };

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
        name={ 'Email' }
        type={ 'email' }
      />
      <Input 
        onChange={(e) => { setPw(e.target.value); }}
        value={ pw }
        name={ 'Password' }
        type={ 'password' }
      />
      <Button
        name='Login'
      />
    </SForm>
  );
};

export default LoginForm;
