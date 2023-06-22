import styled from 'styled-components';
import tw from 'twin.macro';

// reference to media queries
// https://www.altamira.ai/blog/common-screen-sizes-for-responsive-web-design/

const SForm = styled.form`
  ${tw`
    flex
    flex-col
  `}
  width: 280px;
  color: #fff;
  background-color:#433F5A;
  align-items: center;
  margin-top: 8rem;
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
  
  button.register-btn {
    background-color: #FF6442;
    color: #fff;
    width: 200px;
    height: 40px;
    border-radius: 22px;
    border-color: #FF6442;
    position: fixed;
    bottom: 0;
    margin-bottom: 2rem;
    &:hover {
      color: white;
      transform: scale(1.05);
    }
  }


  // SMARTPHONE
  @media only screen and (min-width: 360px) and (max-width: 480px) {
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
