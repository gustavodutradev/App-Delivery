import styled from 'styled-components';
import Select from '../../../components/Select';

const SelectSeller = styled(Select)`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
      select {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid #036B52;
      background-color: #fff;
      color: #036B52;
      font-size: 14px;
      font-weight: bold;
  }
}
`;

export default SelectSeller;
