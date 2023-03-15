import styled from 'styled-components';
import tw from 'twin.macro';

const SCard = styled.div`
  ${tw`
    justify-center
    flex
    flex-col
    m-1.5
    font-bold
    border
    rounded
    p-4
    box-border
    gap-2
  `}

width: 10rem;
height: 20rem;
background-color: #333333ed;
border-color: #333333a2;
  input {
    width: 2em;
  }

  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
    p-3
    gap-1
    `}
    width: 150px;

  input {
    width: 2em;
    height: 2em;
  }

  button {
    width: 2em;
    height: 2em;
  }
  }
`;

export default SCard;
