import tw from 'twin.macro';
import styled from 'styled-components';

export const SAdmin = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
`}
height: 100vh;
width: 100%;
gap: 1.5rem;
}
`;

export default SAdmin;
