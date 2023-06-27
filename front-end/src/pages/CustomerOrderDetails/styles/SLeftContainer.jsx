import styled from 'styled-components';
import tw from 'twin.macro';

const LeftContainer = styled.div`
@media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
      flex
      justify-center
      items-center
      gap-1
    `}
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-weight: bold;

    span {
      font-size: 16px;
      text-shadow: 0.1rem 0.1rem 0.2rem #333333aa;
      font-weight: bold;
    }

    .index {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1.5rem;
    background-color: #1f6caf;
    border-radius: 100%;
    color: white;
    }
}
`;

export default LeftContainer;
