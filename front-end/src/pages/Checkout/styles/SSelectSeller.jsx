import styled from 'styled-components';
import Select from '../../../components/Select';

const SelectSeller = styled(Select)`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  select {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #FF6442;
    background-color: #fff;
    color: black;
    font-size: 14px;
    text-align: center;
  }

}
`;

export default SelectSeller;
