import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
import { setUser } from '../../redux/slices/userSlice';
import axiosRequest from '../../utils/axios';
import { POST_STATUS_OK } from '../../utils/statusCodes';

// styles
import SForm from './styles/SForm';
import SRegister from './styles/SRegister';

const MIN_PASSWORD_CHARACTERS = 6;
const MIN_NAME_CHARACTERS = 12;
const REGEXP_EMAIL = /\S+@\S+\.\S+/;

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [wrongRegister, setWrongRegister] = useState(false);
  const dispatch = useDispatch();
  const axios = axiosRequest();
  const navigate = useNavigate();

  const redirect = (status) => {
    if (status === POST_STATUS_OK) return navigate('/customer/products');
    console.log(`erro: status ${status} sem resposta`);
  };

  const handleRequest = (result) => {
    const { status, data } = result;
    console.log(result);
    if (status === POST_STATUS_OK) {
      dispatch(setUser(data));
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
