import styled from 'styled-components';
import tw from 'twin.macro';

const SListHeader = styled.div`
${tw`
flex
justify-center
items-center
flex-wrap
`}
border-radius: 10px;
box-shadow: 0.3rem 0.3rem 0.7rem #333333;
gap: 1rem;
height: auto;
width: 60%;
padding: 0.5rem;
margin-top: 1rem;
background-color: #036B52;
color: white;

span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 40px;
    font-weight: bold;
    text-shadow: 0.1rem 0.1rem 0.2rem #333333;
}

button {
    height: 60px;
    width: 80px;
    font-size: 12px;
    border: none;
    border-radius: 10px;
    color: rgb(255, 197, 0);
    background-color: #333333;
}
`;

export default SListHeader;
