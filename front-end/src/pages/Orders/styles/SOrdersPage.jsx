import tw from 'twin.macro';
import styled from 'styled-components';

const SOrdersPage = styled.div`

@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
`}

height: 100vh;
width: 100vw;
}
`;

export default SOrdersPage;
