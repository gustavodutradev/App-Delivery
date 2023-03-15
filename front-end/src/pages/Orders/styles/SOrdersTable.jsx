import tw from 'twin.macro';
import styled from 'styled-components';

const SOrdersTable = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
    flex
    flex-wrap
    justify-center
    items-center
    `}
    height: auto;
    width: 100vw;
  }
`;

export default SOrdersTable;
