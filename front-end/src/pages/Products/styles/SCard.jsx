import styled from 'styled-components';
import tw from 'twin.macro';

const SCard = styled.div`
  ${tw`
    justify-around
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
height: 17rem;
background: #433f5a;
background: -webkit-linear-gradient(145deg, #433f5a 0%, #ff6442 50%, #433f5a 100%);
background: linear-gradient(145deg, #433f5a 0%, #ff6442 50%, #433f5a 100%);
border: 1px solid #433f5a;
outline: none;
border-radius: 8px;
filter: drop-shadow(0px 15px 27px rgba(0, 0, 0, 0.25));
text-shadow: 0.1rem 0.1rem 0.2rem #333333aa;

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
