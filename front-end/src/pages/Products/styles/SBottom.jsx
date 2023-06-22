import styled from 'styled-components';
import tw from 'twin.macro';

const BottomContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
    w-full
    flex
    flex-col
    justify-between
  `}

button {
  border-radius: 8px;
  color: #433f5a;
  background-color: #fff;
  border: 1px solid rgb(255,197,0);
}

  .product-title {
    ${tw`
        text-center
        font-bold
        mt-2
    `}
    color: white;
  }
}
`;

export default BottomContainer;
