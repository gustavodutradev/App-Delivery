import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SListItem = styled.div`
  ${tw`
    justify-center
    flex
    m-1.5
    font-bold
    rounded-md
    gap-2
    bg-white
    overflow-hidden
  `}
  span {
    ${tw`
      flex
      justify-center
      items-center
      h-full
      px-5
    `}
    font-size: 2rem;
  }
`;

const LeftContainer = styled.div`
  ${tw`
    flex
  `}
  width: 30rem;
  .index {
    min-width: 2rem;
  }
`;

const RightContainer = styled.div`
  ${tw`
    text-white
    flex
  `}
  .quantity {
    min-width: 3rem;
    background-color: #036B52;
  }

  .unitPrice {
    background-color: #421981;
    width: 12rem;
    justify-content: space-between;
  }
  .subTotal {
    background-color: #056CF9;
    width: 12rem;
    justify-content: space-between;
  }
  button {
    font-size: 2rem;
    background-color: #2FC18C;
    border-radius: 0;
    ${tw`
      px-5
      m-0
      border-0
    `}
  }
  `;

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
          className="index"
          data-testid={
            `seller_order_details__element-order-table-item-number-${index}`
          }
        >
          {index}
        </span>
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
