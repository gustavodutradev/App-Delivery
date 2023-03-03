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
    m-1.5
    font-bold
    border
    rounded
    bg-gray-700
    text-white
    p-1
  `}

  width: 200px;
  height: 350px;

  .product-IMG {
    background-image: url(${(props) => props.imgUrl});
  }
`;

function Card(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(changeQuantity({ id: product.id, quantity })); //
  }, [quantity]);

  return (
    <SCard imgUrl={ product.urlImage }>
      <div className="product-IMG">
        <span>{product.price}</span>
      </div>
      <div>
        <span>{product.name}</span>
        <div>
          <button
            onClick={ () => { setQuantity((count) => count - 1); } }
            type="button"
          >
            -
          </button>
          <Button
            onClick={ () => { setQuantity((count) => count - 1); } }
            name="-"
            datatestId="customer_products__button-card-rm-item-<id>"
          />
          <Input
            name=""
            type="number"
            onChange={ (e) => { setQuantity(e.target.value); } }
            value={ quantity }
            datatestId="customer_products_input-card-quantity-<id>"
          />
          <Button
            onClick={ () => { setQuantity((count) => count + 1); } }
            name="+"
            datatestId="customer_products__button-card-add-item-<id>"
          />
        </div>
      </div>
    </SCard>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
