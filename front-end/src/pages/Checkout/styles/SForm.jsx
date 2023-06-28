import styled from 'styled-components';

const SForm = styled.form`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  span {
    font-size: 12px;
    font-weight: bold;
    color: #FF6442;
  }

  .address {
    width: 100%;
    height: 25px;
    border: 1px solid #FF6442;
    border-radius: 5px;
    font-size: 14px;
    font-weight: lighter;
    padding: 0.5em;
  }
  .address-number {
    width: 100%;
    height: 25px;
    border: 1px solid #FF6442;
    border-radius: 5px;
    font-size: 14px;
    font-weight: lighter;
    padding: 0.5em;
  }
  }
`;

export default SForm;
