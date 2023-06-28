import styled from 'styled-components';
import tw from 'twin.macro';

const SListItem = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
    flex
    justify-between
    items-center
    `}
    width: 330px;
    height: 80px;
    box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    border-radius: 15px;
    background-color: #FDFDFD;
    margin: 1rem 0;
    position: relative;
}

  span {
    font-size: 12px;
  }
`;

export default SListItem;
