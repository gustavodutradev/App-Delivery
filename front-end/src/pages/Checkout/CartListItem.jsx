import PropTypes from 'prop-types';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { changeQuantity } from '../../redux/slices/cartSlice';

// styles
import QuantityContainer from '../Products/styles/SQuantity';
import LeftContainer from './styles/SLeftContainer';
import SListItem from './styles/SListItem';
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

  const handleNegative = (number) => (number < 0 ? 0 : number);

  const setQuantity = (number) => {
    dispatch(changeQuantity({
      quantity: number,
      id: product.id,
    }));
  };

  return (
    <SListItem>
      <LeftContainer>
        <img
          src={ product.urlImage }
          alt=""
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </LeftContainer>
      <RightContainer>
        <span
          className="description"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {product.name}
        </span>
        <QuantityContainer>
          <Button
            onClick={ () => { setQuantity(handleNegative(product.quantity - 1)); } }
            name="-"
            datatestId={ `customer_products__button-card-rm-item-${product.id}` }
          />
          <Button
            onClick={ () => { setQuantity(handleNegative(product.quantity + 1)); } }
            name="+"
            datatestId={ `customer_products__button-card-add-item-${product.id}` }
          />
        </QuantityContainer>
        <div className="product-infos">
          <span
            className="subTotal"
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {`R$ ${formatValue(product.price * product.quantity)}`}
          </span>
          <Button
            name={ <FaTrashAlt /> }
            type="button"
            onClick={ () => {
              dispatch(changeQuantity({
                id: product.id,
                quantity: 0,
              }));
            } }
            datatestId={ `customer_checkout__element-order-table-remove-${index}` }
          />
        </div>
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
