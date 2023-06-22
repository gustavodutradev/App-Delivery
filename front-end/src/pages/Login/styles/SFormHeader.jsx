import styled from 'styled-components';

const SFormHeader = styled.div`
  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    position: absolute;
    width: 100vw;
    min-height: 250px;
    filter: drop-shadow(0px 15px 27px rgba(0, 0, 0, 0.25));
    left: 0px;
    top: 0px;
    border-radius: 0px 0px 30px 30px;
    background: #433f5a;
    background: -webkit-linear-gradient(145deg, #433f5a 0%, #ff6442 50%, #433f5a 100%);
    background: linear-gradient(145deg, #433f5a 0%, #ff6442 50%, #433f5a 100%);
}
`;

export default SFormHeader;
