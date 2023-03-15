import styled from 'styled-components';

const Headers = styled.thead`
    @media only screen and (min-width: 360px) and (max-width: 480px) {
        
        tr {
            line-height: 1rem;
            background-color: #036B52;
            color: white;
            font-weight: bold;
            border-radius: 5px;
        }
        th {
            width: 0.5rem;
        }
    }
`;

export default Headers;
