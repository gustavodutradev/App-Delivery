import styled from 'styled-components';
import tw from 'twin.macro';

const SRegister = styled.div`
  ${tw`
    flex
    font-bold
    border
    rounded
    text-white
  `}
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 197, 0);
  border-color: rgb(255, 197, 0);
`;

export default SRegister;
