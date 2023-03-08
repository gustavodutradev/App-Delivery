import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { changeQuantity } from '../../redux/slices/cartSlice';

const SCard = styled.div`
  ${tw`
    justify-center
    flex
    flex-col
    m-1.5
    font-bold
    border
    rounded
    text-white
    p-6
    gap-2
  `}
  width: 20rem;
  background-color: #333333ed;
  border-color: #333333a2;
  input {
    width: 2em;
  }
`;

const QuantityContainer = styled.div`
  ${tw`
    flex
    flex-1
    justify-center
    gap-3
  `}
  align-items: center;
  button {
    ${tw`
      h-10
      w-10
    `}
    font-size: 1.2em;
    border-color: #FC0;
    background-color: #333;
    color: #FC0;
    &:hover {
      transition: 0.2s;
      border-color: #333;
      background-color: #FC0;
      color: #333;
    }
  }

  input {
    ${tw`
      w-20
      h-10
      text-black
    `}
    text-align: center;
    border: 3px solid #e8be15;
    padding: 0.5em;
  }
`;

const BottomContainer = styled.div`
  ${tw`
  align-middle
  `}
  .product-title {
    display: block;
    align-items: center;
    text-align: center;
  }
  `;

const TopContainer = styled.div`
  ${tw`
    w-full
    bg-white
    flex
    flex-col
  `}
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  object-fit: fill;
  background-size: cover;
  background-position-y: 50%;
  background-position-x: 50%;
  align-items: center;

  img {
    height: 266.67px;
  }

  span {
    color: #333333;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
  }
`;

function Card(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleDispatch = () => {
    dispatch(changeQuantity({
      quantity,
      id: product.id,
    }));
  };

  const handleNegative = (number) => (number < 0 ? 0 : number);

  useEffect(() => {
    handleDispatch();
  }, [quantity]);

  return (
    <SCard>
      <TopContainer>
        <span data-testid={ `customer_products__element-card-price-${product.id}` }>
          R$
          {product.price.replace('.', ',')}
        </span>
        <img
          src={ product.urlImage }
          alt=""
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </TopContainer>
      <BottomContainer>
        <span
          className="product-title"
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          {product.name}
        </span>
        <QuantityContainer>
          <Button
            onClick={ () => { setQuantity((count) => handleNegative(count - 1)); } }
            name="-"
            datatestId={ `customer_products__button-card-rm-item-${product.id}` }
          />
          <Input
            name=""
            type="number"
            onChange={ (e) => { setQuantity(handleNegative(+e.target.value)); } }
            value={ quantity }
            datatestId={ `customer_products__input-card-quantity-${product.id}` }
          />
          <Button
            onClick={ () => { setQuantity((count) => handleNegative(+count + 1)); } }
            name="+"
            datatestId={ `customer_products__button-card-add-item-${product.id}` }
          />
        </QuantityContainer>
      </BottomContainer>
    </SCard>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Card;
