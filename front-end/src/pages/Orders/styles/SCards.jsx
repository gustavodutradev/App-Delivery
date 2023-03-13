import styled from 'styled-components';
import tw from 'twin.macro';

const SCard = styled.div`
${tw`
    grid
    grid-cols-3
    gap-x-3
    items-center
    border
    rounded
    p-2
    m-2
    font-bold
    text-white
`}
`;

const SOrderID = styled.div`
${tw`
    flex
    justify-center
`}
width: 50px;
`;

const SDateAndPrice = styled.div`
${tw`
    flex
    flex-col
    justify-center
    items-center
    ml-1
`}
line-height: 1.6rem;
`;

const SStatus = styled.div`
${tw`
    flex
    justify-center
    p-2
`}
border: 1px solid white;
border-radius: 20px;
`;

export { SCard, SOrderID, SDateAndPrice, SStatus };
