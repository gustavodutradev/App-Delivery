import styled from 'styled-components';
import tw from 'twin.macro';

const RightContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {

    ${tw`
      text-white
      flex
      gap-1
      justify-center
      items-center
    `}
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    .quantity {
      min-width: 1.5rem;
      background-color: #036B52;
      font-weight: bold;
      border-radius: 5px;
    }
    .unitPrice {
      background-color: #421981;
      width: 60px;
      font-weight: bold;
      border-radius: 5px;
    }

.subTotal {
  color: #FF5833;
  font-size: 16px;
  width: auto;
  text-shadow: 0.1rem 0.1rem 0.2rem #333333aa;
  font-weight: bold;
}
}
  `;

export default RightContainer;
