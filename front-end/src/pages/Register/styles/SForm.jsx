import styled from 'styled-components';
import tw from 'twin.macro';

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    p-10
    gap-4
  `}
    width: 35vh;
    color: black;
    border-radius: 15px;
    background-color: rgba(204, 156, 0, 0.486);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    align-items: center;

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

  button {
    cursor: pointer;
    width: 12rem;
    height: 1.8rem;
    background-color: #333333;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: lighter;
      &:hover {
      color: rgb(255, 197, 0);
    }
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 480px) {
    width: 270px;
    height: 330px;
    text-transform: uppercase;
    margin-top: 10rem;
    input {
      width: 12rem;
      height: 1.5rem;
    }
    button {
      width: 12rem;
      height: 1.5rem;
    }
  }
`;

export default SForm;
