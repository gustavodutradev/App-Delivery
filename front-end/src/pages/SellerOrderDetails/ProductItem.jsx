import PropTypes from 'prop-types';
import React from 'react';

import LeftContainer from './styles/SLeftContainer';
import SListItem from './styles/SListItem';
import RightContainer from './styles/SRightContainer';

function ProductItem(props) {
  const { product, index } = props;

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
          className="description"
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {product.name}
        </span>
      </LeftContainer>
      <RightContainer>
        <span
          className="quantity"
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {product.quantity}
        </span>
        <span
          className="unitPrice"
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          {`R$: ${formatValue(product.price)}`}
        </span>
        <span
          className="subTotal"
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {`R$: ${formatValue(product.price * product.quantity)}`}
        </span>
      </RightContainer>
    </SListItem>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductItem;
