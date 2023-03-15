import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { changeQuantity } from '../../redux/slices/cartSlice';

// styles
import SListItem from './styles/SListItem';
import LeftContainer from './styles/SLeftContainer';
import RightContainer from './styles/SRightContainer';

function CartListItem(props) {
  const { product, index } = props;
  const dispatch = useDispatch();

  const formatValue = (number) => {
    if (typeof number === 'number') {
      return String(number.toFixed(2)).replace('.', ',');
    }
    return String(number).replace('.', ',');
  };

  return (
    <SListItem>
      <LeftContainer>
        <span
          className="index"
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          {index + 1}
        </span>
        <span
          className="description"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {product.name}
        </span>
      </LeftContainer>
      <RightContainer>
        <span
          className="quantity"
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {product.quantity}
        </span>
        <span
          className="unitPrice"
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {`R$: ${formatValue(product.price)}`}
        </span>
        <span
          className="subTotal"
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {`R$: ${formatValue(product.price * product.quantity)}`}
        </span>
        <Button
          name="Remover"
          type="button"
          onClick={ () => {
            dispatch(changeQuantity({
              id: product.id,
              quantity: 0,
            }));
          } }
          datatestId={ `customer_checkout__element-order-table-remove-${index}` }
        />
      </RightContainer>
    </SListItem>
  );
}

CartListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CartListItem;
