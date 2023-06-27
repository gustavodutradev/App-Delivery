import styled from 'styled-components';

const LeftContainer = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  img {
    width: 60px;
    height: fit-content;
    border-radius: 100px;
    filter: saturate(115%)
  }
  
  }
`;

export default LeftContainer;
