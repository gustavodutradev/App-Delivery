import styled from 'styled-components';
import tw from 'twin.macro';

const QuantityContainer = styled.div`
  ${tw`
    flex
    flex-1
    justify-center
    items-center
  `}
  align-items: center;
  button {
    ${tw`
      h-10
      w-10
      m-auto
    `}
    font-size: 1.2em;
    border-color: rgb(255, 197, 0);
    background-color: #333;
    color: rgb(255, 197, 0);
    &:hover {
      transition: 0.2s;
      border-color: #333;
      background-color: #FC0;
      color: #333;
    }
  }

  input {
    ${tw`
      w-10
      h-10
      text-black
    `}
    text-align: center;
    border: 3px solid rgb(255, 197, 0);
    padding: 0.5em;
  }
`;

export default QuantityContainer;
