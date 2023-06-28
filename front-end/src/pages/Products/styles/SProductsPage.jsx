import styled from 'styled-components';
import tw from 'twin.macro';

const SProductsPage = styled.div`

@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
  justify-between
`}

}
`;

export default SProductsPage;
