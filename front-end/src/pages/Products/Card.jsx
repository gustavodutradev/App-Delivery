import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addOrUpdateItem, removeItem } from '../../redux/slices/cartSlice';

const SCard = styled.div`
  ${tw`
    justify-center
    flex
    flex-col
    m-1.5
    font-bold
    border
    rounded
    bg-gray-700
    text-white
    p-6
    border-gray-400
  `}
  width: 23rem;

  input {
    width: 2em;
  }
`;

const QuantityContainer = styled.div`
  ${tw`
    flex
    flex-1
    justify-center
  `}
  align-items: center;
  button {
    ${tw`
      h-6
    `}
  }

  input {
    ${tw`
      w-20
      text-black
    `}
    text-align: center;
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
  `}
  background-image: url(${(props) => props.imgUrl});
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  object-fit: cover;
`;

function Card(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleDispatch = () => {
    if (quantity < 1) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addOrUpdateItem({
        name: product.name,
        price: product.price,
        quantity,
        id: product.id,
      }));
    }
  };

  const handleNegative = (number) => (number < 0 ? 0 : number);

  useEffect(() => {
    handleDispatch();
  }, [quantity]);

  return (
    <SCard imgUrl={ product.urlImage }>
      <TopContainer>
        <span>R$ {product.price.replace('.', ',')}</span>
      </TopContainer>
      <BottomContainer>
        <span className="product-title">{product.name}</span>
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
            datatestId={ `customer_products_input-card-quantity-${product.id}` }
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
  }).isRequired,
};

export default Card;
