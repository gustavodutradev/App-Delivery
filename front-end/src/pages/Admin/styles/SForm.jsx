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
    font-size: 14px;
    font-weight: bold;
    color: white;
  }

  input {
    background: rgb(255, 255, 255);
    border: 1px solid #33333354;
    border-radius: 8px;
    color: rgb(51, 51, 51);
    font-size: 16px;
    width: 100%;
    height: 25px;
    font-weight: lighter;
    padding: 0.5rem;
      &::placeholder{
        font-size: 0.8rem;
      }
  }

  select {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    background-color: #fff;
    color: black;
    font-size: 14px;
    text-align: center;
  }

  button {
    font-size: 12px;
    cursor: pointer;
    width: 6rem;
    height: 1.8rem;
    background-color: #FF5833;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: bold;
  }
}
`;

export default SForm;
