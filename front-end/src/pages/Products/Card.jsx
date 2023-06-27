import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { changeQuantity } from '../../redux/slices/cartSlice';

// styles
import BottomContainer from './styles/SBottom';
import SCard from './styles/SCard';
import QuantityContainer from './styles/SQuantity';
import TopContainer from './styles/STop';

function Card(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const handleNegative = (number) => (number < 0 ? 0 : number);

  const setQuantity = (number) => {
    dispatch(changeQuantity({
      quantity: number,
      id: product.id,
    }));
  };

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
            onClick={ () => { setQuantity(handleNegative(product.quantity - 1)); } }
            name="-"
            datatestId={ `customer_products__button-card-rm-item-${product.id}` }
          />
          <Input
            name=""
            type="number"
            onChange={ (e) => { setQuantity(handleNegative(+e.target.value)); } }
            value={ product.quantity }
            datatestId={ `customer_products__input-card-quantity-${product.id}` }
          />
          <Button
            onClick={ () => { setQuantity(handleNegative(product.quantity + 1)); } }
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
