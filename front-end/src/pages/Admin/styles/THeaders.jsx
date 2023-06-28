import styled from 'styled-components';

const Headers = styled.thead`
    @media only screen and (min-width: 360px) and (max-width: 480px) {
        
        tr {
            line-height: 1rem;
            background-color: #FF5833;
            color: black;
            text-shadow: 0.1rem 0.1rem 0.2rem #333333aa;
            font-weight: bold;
            font-size: 14px;
            border-radius: 5px;
        }
        th {
            width: 1rem;
            padding: 0.3rem 0.3rem 0.3rem 0.3rem;
        }
    }
`;

export default Headers;
