import styled from 'styled-components';
import tw from 'twin.macro';

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-between
  `}
  .product-title {
    ${tw`
        text-center
        font-bold
        mt-2
    `}
    color: white;
  }
`;

export default BottomContainer;
