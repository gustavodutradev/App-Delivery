import styled from 'styled-components';
import tw from 'twin.macro';

const SForm = styled.form`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  grid
  grid-cols-1
  gap-2
  justify-items-center
  `}
  span {
    font-size: 12px;
  }

  input {
    background: rgb(255, 255, 255);
    border: 1px solid #33333354;
    border-radius: 8px;
    color: rgb(51, 51, 51);
    font-size: 16px;
    width: 18rem;
    height: 2rem;
    font-weight: lighter;
    padding: 0.5rem;
      &::placeholder{
        font-size: 0.8rem;
      }
  }

  select {
    background: rgb(255, 255, 255);
    border: 1px solid #33333354;
    border-radius: 8px;
    color: rgba(51, 51, 51, 0.589);
    font-size: 13px;
    width: 18rem;
    height: 2rem;
    font-weight: lighter;
    padding: 0.5rem;
  }

  button {
    font-size: 12px;
    cursor: pointer;
    width: 6rem;
    height: 1.8rem;
    background-color: #333333;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: bold;
  }
}
`;

export default SForm;
