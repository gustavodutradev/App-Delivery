import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
import { setUser } from '../../redux/slices/userSlice';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';

// styles
import SForm from './styles/SForm';
import SFormHeader from './styles/SFormHeader';
import SLogin from './styles/SLogin';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [wrongLogin, setWrongLogin] = useState(false);

  const axios = axiosRequest();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const redirectByRole = (role) => {
    if (role === 'seller') return navigate('/seller/orders');
    if (role === 'administrator') return navigate('/admin/manage');
    if (role === 'customer') return navigate('/customer/products');
  };

  useEffect(() => {
    if (!user) return;
    redirectByRole(user.role);
  }, []);

  const MIN_PASSWORD_CHARACTERS = 6;
  const REGEXP_EMAIL = /\S+@\S+\.\S+/;

  const handleRequest = (result) => {
    const { status, data } = result;
    if (status === GET_STATUS_OK) {
      dispatch(setUser(data));
      redirectByRole(data.role);
    }
    return null;
  };

  const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS) && REGEXP_EMAIL.test(email);

  return (
    <SLogin>
      <SFormHeader>
        header
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
          name="Address Email"
          type="email"
          datatestId="common_login__input-email"
          placeHolder="user@deliveryapp.com"
        />
        <Input
          onChange={ (e) => { setPw(e.target.value); } }
          value={ pw }
          name="Password"
          type="password"
          datatestId="common_login__input-password"
          placeHolder="**********"
        />
        <Button
          name="Log In"
          datatestId="common_login__button-login"
          disabled={ !isValid }
        />
        <Button
          className="register-btn"
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
