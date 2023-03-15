import tw from 'twin.macro';
import styled from 'styled-components';

const SListHeader = styled.div`
${tw`
    flex
    justify-between
    items-center
`}
border-radius: 10px;
box-shadow: 0.3rem 0.3rem 0.7rem #333333;
gap: 1rem;
height: auto;
width: 90%;
padding: 0.5rem;
margin-top: 1rem;
background-color: #036B52;
color: white;

span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 40px;
    font-weight: bold;
}

button {
    height: 80px;
    width: 100px;
    font-size: 10px;
    border: none;
    border-radius: 10px;
    color: rgb(255, 197, 0);
    background-color: #333333;
}
`;

export default SListHeader;
