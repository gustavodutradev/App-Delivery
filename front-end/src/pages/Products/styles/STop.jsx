import styled from 'styled-components';
import tw from 'twin.macro';

const TopContainer = styled.div`
  ${tw`
    w-full
    h-48
    bg-white
    flex
    flex-col
    justify-around
  `}
  border-radius: 8px;
  object-fit: fill;
  align-items: center;
  box-shadow: 0px 15px 27px rgba(0, 0, 0, 0.25);

  img {
    ${tw`
        w-1/2
        h-max
        object-contain
    `}
  }

  span {
    color: #333333;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
  }
`;

export default TopContainer;
