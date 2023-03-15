import styled from 'styled-components';
import tw from 'twin.macro';

// reference to media queries
// https://www.altamira.ai/blog/common-screen-sizes-for-responsive-web-design/

const SForm = styled.form`
  ${tw`
    flex
    flex-col
    justify-center
    p-10
    gap-4
  `}
  width: 350px;
  color: black;
  border-radius: 15px;
  background-color: rgba(204, 156, 0, 0.486);
  box-shadow: 0.3rem 0.3rem 0.7rem #333333;
  align-items: center;
  margin-top: 8rem;
  
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
  
  button.register-btn {
    background-color: rgba(204, 156, 0, 0);
    width: 15rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0;
    &:hover {
      color: white;
      transform: scale(1.05);
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

  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    width: 280px;
    height: auto;
    text-transform: uppercase;
    gap: 0;
    font-size: 12px;
    position: fixed;
    margin-bottom: 1rem;
    
    img {
      height: auto;
      max-width: 100%;
      border-radius: 15px;
    }

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
