import styled from 'styled-components';
import tw from 'twin.macro';

const SOrdersPage = styled.div`

@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
`}

height: 100vh;
width: 100vw;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
}
`;

export default SOrdersPage;
