import styled from 'styled-components';

const STable = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  background-color: #433F5A;
  border-color: #433F5A;
  height: 100%;

  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    text-transform: uppercase;
    font-size: 12px;
}

/* @media only screen and (min-width: 1281px) and (max-width: 1920px) {
  height: 100%;
} */
`;

export default STable;
