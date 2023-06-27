import styled from 'styled-components';

const SFormHeader = styled.div`
  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    position: absolute;
    width: 100%;
    min-height: 300px;
    filter: drop-shadow(0px 15px 27px rgba(0, 0, 0, 0.25));
    top: 1px;
    right: 0px;
    border-radius: 0px 0px 30px 30px;
    margin: auto;

    img {
      width: 96vw;
      object-fit: cover;
      border-radius: 0px 0px 30px 30px;
    }
}
`;

export default SFormHeader;
