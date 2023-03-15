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
    width: 8rem;
    font-weight: bold;
    .index {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1.5rem;
    background-color: #1f6caf;
    border-radius: 100px;
    color: white;
    font-weight: bold;
    height: 1.5rem;
    }
}
`;

export default LeftContainer;
