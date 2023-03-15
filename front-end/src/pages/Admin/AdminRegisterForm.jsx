import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
import Select from '../../components/Select';
import axiosRequest from '../../utils/axios';

// styles
import SForm from './styles/SForm';

const roleTypes = [
  { name: 'customer', value: 'customer' },
  { name: 'seller', value: 'seller' },
  { name: 'administrador', value: 'administrador' },
];
const MIN_PASSWORD_CHARACTERS = 6;
const MIN_NAME_CHARACTERS = 12;
const REGEXP_EMAIL = /\S+@\S+\.\S+/;

export default function AdminRegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [wrongRegister, setWrongRegister] = useState(false);
  const [selectedRole, setSelectedRole] = useState('customer');
  const token = useSelector((state) => state.user.token);

  const isValid = (pw.length >= MIN_PASSWORD_CHARACTERS)
  && REGEXP_EMAIL.test(email)
  && (name.length >= MIN_NAME_CHARACTERS);

  const resetState = () => {
    setEmail('');
    setName('');
    setPw('');
    setWrongRegister(false);
  };

  return (
    <SForm
      onSubmit={ async (e) => {
        e.preventDefault();
        try {
          await axiosRequest({ authorization: token }).post(
            '/admin',
            { name, email, password: pw, role: selectedRole,
            },
          );
          resetState();
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
        datatestId="admin_manage__input-name"
        placeHolder="Nome e Sobrenome"
      />
      <Input
        onChange={ (e) => { setEmail(e.target.value); } }
        value={ email }
        name="Email"
        type="email"
        datatestId="admin_manage__input-email"
        placeHolder="E-mail"
      />
      <Input
        onChange={ (e) => { setPw(e.target.value); } }
        value={ pw }
        name="Password"
        type="password"
        datatestId="admin_manage__input-password"
        placeHolder="Senha"
      />
      <Select
        name="Tipo"
        value={ selectedRole }
        dataTestid="admin_manage__select-role"
        onChange={ (e) => { setSelectedRole(e.target.value); } }
        options={ roleTypes }
      />
      <Button
        name="CADASTRAR"
        datatestId="admin_manage__button-register"
        disabled={ !isValid }
      />

      {
        wrongRegister && <ErrorMessage
          message="Ops! E-mail ou Nome já cadastrado"
          datatestId="admin_manage__element-invalid-register"
        />
      }
    </SForm>
  );
}
