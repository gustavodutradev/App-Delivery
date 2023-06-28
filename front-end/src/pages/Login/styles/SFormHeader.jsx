import styled from 'styled-components';
import tw from 'twin.macro';

const SFormHeader = styled.div`
  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
      flex
      items-center
      justify-center
    `}

    position: absolute;
    width: 100%;
    min-height: 300px;
    filter: drop-shadow(0px 15px 27px rgba(0, 0, 0, 0.45));
    top: 1px;
    right: 0px;
    border-radius: 0px 0px 30px 30px;
    margin: auto;

    img {
      width: 99.5vw;
      object-fit: cover;
      border-radius: 0px 0px 30px 30px;
      filter: contrast(120%);
    }
}
`;

export default SFormHeader;
