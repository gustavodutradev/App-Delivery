import styled from 'styled-components';
import tw from 'twin.macro';

const SCard = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    ${tw`
        flex
        flex-col
        flex-wrap
        justify-evenly
        items-center
        m-2
        gap-2
        rounded
`}
    padding: 1px;
    height: 180px;
    width: 150px;
    box-shadow: 0.3rem 0.3rem 0.7rem #333333;
  }
`;

const SOrderID = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    background-color: #1f6caf;
    border-radius: 100px;
    padding: 1px 10px 1px 10px;
    color: white;
    font-weight: bold;
  }
`;

const SDateAndPrice = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #1f6caf;
    font-weight: bold;
    padding: 5px;
    gap: 0.5rem;
    color: white;
  }
`;

const SStatus = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
      border: 1px dashed #1f6caf;;
      border-radius: 20px;
      padding: 0.4rem;
      color: #333333;
      font-weight: bold;
  }
`;

export { SCard, SOrderID, SDateAndPrice, SStatus };
