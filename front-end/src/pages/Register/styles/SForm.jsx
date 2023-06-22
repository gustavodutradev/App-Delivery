import styled from 'styled-components';
import tw from 'twin.macro';

const SForm = styled.form`
  ${tw`
    flex
    flex-col
  `}
  width: 280px;
  color: #fff;
  background-color:#433F5A;
  align-items: center;
  border: none;
  outline: none;
  filter: drop-shadow(0 -32px 16px -0.5px rgba(0, 0, 0, 0.25));

  input {
    background: #433F5A;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
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
    background-color: #FF6442;
    color: white;
    border-radius: 10px;
    padding: 0.7rem;
    font-size: 12px;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 480px) {
    width: 280px;
    height: auto;
    gap: 0;
    font-size: 15px;
    position: fixed;
    margin-bottom: 1rem;

    input {
      width: 10rem;
      height: 1rem;
      font-size: 10px;
        &::placeholder{
          font-size: 0.7rem;
        }
    }
    button {
      width: 6rem;
      height: 1rem;
    }
  }
`;

export default SForm;
