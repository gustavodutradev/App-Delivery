import styled from 'styled-components';
import tw from 'twin.macro';

const SLogin = styled.div`
  ${tw`
    flex
    flex-col
    gap-2
    font-bold
    border
    rounded
    text-white
    p-6
  `}
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #433F5A;


`;

export default SLogin;
