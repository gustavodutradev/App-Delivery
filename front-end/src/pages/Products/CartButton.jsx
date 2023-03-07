import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function CartButton() {
  const navigate = useNavigate();
  const goToCart = () => navigate('/customer/orders');
  const productsRedux = useSelector((state) => state.cart.items);

  const totalPrice = (products) => products.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  return (
    <Button
      type="button"
      datatestId="customer_products__button-cart customer_products__checkout-bottom-value"
      name={ `Ver Carrinho: R$ ${totalPrice(productsRedux).toFixed(2)}` }
      onClick={ goToCart }
    />
  );
}

export default CartButton;
