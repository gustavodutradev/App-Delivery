import React from 'react';
import { useSelector } from 'react-redux';
import CartListItem from './CartListItem';

function CartList() {
  const products = useSelector((state) => state.cart.items);
  const totalPrice = products.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  return (
    <div>
      <ul>
        {products
          .filter((e) => e.quantity > 0)
          .map((e, i) => (
            <li key={ i }>
              <CartListItem product={ e } index={ i } />
            </li>
          ))}
      </ul>
      <div>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { String(totalPrice.toFixed(2)).replace('.', ',') }
        </span>
      </div>
    </div>
  );
}

CartList.propTypes = {};

export default CartList;
