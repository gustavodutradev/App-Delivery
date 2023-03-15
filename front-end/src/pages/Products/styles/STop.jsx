import styled from 'styled-components';
import tw from 'twin.macro';

const TopContainer = styled.div`
  ${tw`
    w-full
    bg-white
    flex
    flex-col
    justify-center
  `}
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  object-fit: fill;
  align-items: center;

  img {
    ${tw`
        w-1/2
        h-1/2
        object-contain
        mt-5
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
