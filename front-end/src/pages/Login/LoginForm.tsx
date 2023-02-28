import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';

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

  return (
    <SForm
      onSubmit={() => {}}
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
