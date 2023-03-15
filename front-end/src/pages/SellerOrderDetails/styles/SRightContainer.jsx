import tw from 'twin.macro';
import styled from 'styled-components';

const RightContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {

    ${tw`
      text-white
      flex
      gap-1
      justify-center
      items-center

    `}
    .quantity {
      min-width: 1.5rem;
      background-color: #036B52;
      font-weight: bold;
      border-radius: 7px;
      padding: 0.2rem;
    }
    .unitPrice {
      background-color: #421981;
      width: 5rem;
      font-weight: bold;
      border-radius: 7px;
    }
    .subTotal {
      background-color: #056CF9;
      width: 5rem;
      font-weight: bold;
      border-radius: 7px;
    }
}
  `;

export default RightContainer;
