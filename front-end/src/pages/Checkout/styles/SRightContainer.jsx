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
    width: 250px;

    .quantity {
      min-width: 1.5rem;
      background-color: #036B52;
      font-weight: bold;
      border-radius: 7px;
      padding: 0.2rem;
      box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    }
    .unitPrice {
      background-color: #421981;
      width: 5rem;
      font-weight: bold;
      border-radius: 7px;
      box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    }
    .subTotal {
      background-color: #056CF9;
      width: 5rem;
      font-weight: bold;
      border-radius: 7px;
      box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    }

    button {
      width: 50px;
      font-size: 10px;
      border: none;
      border-radius: 10px;
      background-color: #de3131;
      box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    }
}
  `;

export default RightContainer;