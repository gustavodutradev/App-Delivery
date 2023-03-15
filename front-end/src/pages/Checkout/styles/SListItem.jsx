import styled from 'styled-components';

const SListItem = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    width: 370px;
    box-shadow: 0.3rem 0.3rem 0.7rem #333333;
    border-radius: 10px;
    background-color: rgba(204, 156, 0, 0.486);
}

  span {
    font-weight: bold;
    font-size: 12px;
  }
`;

export default SListItem;
