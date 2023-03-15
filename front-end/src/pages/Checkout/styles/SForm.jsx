import styled from 'styled-components';
import tw from 'twin.macro';

const SForm = styled.form`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  grid
  grid-cols-1
  gap-2
  `}
  span {
    font-size: 12px;
  }
  .address {
    width: 80px;
    border: 1px solid #036B52;
    border-radius: 5px;
  }
  .address-number {
    width: 80px;
    border: 1px solid #036B52;
    border-radius: 5px;
  }
  }
`;

export default SForm;
