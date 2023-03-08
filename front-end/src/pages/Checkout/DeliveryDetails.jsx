import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { clearCart } from '../../redux/slices/cartSlice';
import axiosRequest from '../../utils/axios';

const SForm = styled.form`
  ${tw`
    flex
    items-center
    flex-col
    justify-center
  `}
`;

const FieldsContainer = styled.div`
  ${tw`
    flex
  `}
`;

const SelectSeller = styled(Select)`
  ${tw`
  `}
  border: red solid 1px;
  span{
    margin-bottom: 0.30rem;
  }
  select {
    box-sizing: border-box;
    left: 0%;
    right: 0%;
    top: 37.5%;
    bottom: 0%;
    background: #FFFFFF;
    border-radius: 5px;
    height: 1.6rem;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #036B52;
`;

function DeliveryDetails() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [optionsSelect, setOptionsSelect] = useState([]);

  const dispatch = useDispatch();
  const axios = axiosRequest();
  const navigate = useNavigate();

  useEffect(() => {
    setBtnDisabled(!address || !addressNumber);
  }, [address, addressNumber]);

  useEffect(() => {
    const fetchSellers = async () => {
      const { data } = axios.get(''); // por url de get seller
      setOptionsSelect(data); // fazer a limpeza dos dados antes
    };
    fetchSellers();
  }, []);

  return (
    <SForm
      onSubmit={ async () => {
        try {
          // const { data } = axios.post('', { // req.body to send
          //   id: 0,
          // });
          dispatch(clearCart()); // clear cart after purchase
          navigate(''); // url to navigate
        } catch (error) {
          console.log(error);
        }
      } }
    >
      <FieldsContainer>
        <SelectSeller
          name="P.Vendedora Responsável"
          data-testid="customer_checkout__select-seller"
        value={ seller }
        onChange={ (e) => { setSeller(e.target.value); } }
        // options={ optionsSelect }
        options={ [
          { name: 'ricardo', value: 'ricardo' },
          { name: 'juliana', value: 'juliana' },
          { name: 'gustavo', value: 'gustavo' },
          { name: 'pedro', value: 'pedro' },
        ] }
      />
      <Input
        name="Endereço"
        datatestId="customer_checkout__input-address"
        type="text"
        value={ address }
        onChange={ (e) => { setAddress(e.target.value); } }
      />
      <Input
        name="Numero"
        datatestId="customer_checkout__input-address-number"
        type="text"
        value={ addressNumber }
        onChange={ (e) => { setAddressNumber(e.target.value); } }
      />
      </FieldsContainer>
      <SubmitButton
        name="FINALIZAR PEDIDO"
        datatestId="customer_checkout__button-submit-order"
        disabled={ btnDisabled }
      />
    </SForm>
  );
}

DeliveryDetails.propTypes = {};

export default DeliveryDetails;
