import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const STotalPrice = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    absolute
    bottom-4
    right-0
    rounded-xl
    text-white
    text-4xl
  `}
  background-color: #036B52;
  width: 18rem;
  height: 5rem; // deve ser relativo ao padding-bottom do ListContainer
`;

function TotalPrice({ products, dataTestid }) {
  const totalPrice = products.reduce((acc, curr) => (
    acc + (curr.quantity * (+curr.price))
  ), 0);

  return (
    <STotalPrice>
      Total: R$
      <span
        data-testid={ dataTestid }
      >
        { String(totalPrice.toFixed(2)).replace('.', ',') }
      </span>
    </STotalPrice>
  );
}

TotalPrice.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  dataTestid: PropTypes.string,
};

TotalPrice.defaultProps = {
  dataTestid: '',
};

export default TotalPrice;
