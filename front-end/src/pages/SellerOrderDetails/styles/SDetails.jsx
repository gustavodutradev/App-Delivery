import styled from 'styled-components';
import tw from 'twin.macro';

const SDetails = styled.div`

@media only screen and (min-width: 360px) and (max-width: 480px) {
${tw`
  flex
  flex-col
  items-center
`}
height: 100%;
width: fit-content;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
}
/* --adm2@21!!-- */
`;

export default SDetails;
