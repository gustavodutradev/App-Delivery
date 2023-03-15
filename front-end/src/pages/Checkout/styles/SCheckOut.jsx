import styled from 'styled-components';
import tw from 'twin.macro';

const SCheckout = styled.div`
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

export default SCheckout;
