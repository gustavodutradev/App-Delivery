import styled from 'styled-components';

const TBody = styled.tbody`
    @media only screen and (min-width: 360px) and (max-width: 480px) {
        tr {
            line-height: 1rem;
        }

        td {
            background-color: #ffffff80;
            font-weight: bold;
        }

        button {
            width: 50px;
            font-size: 10px;
            border: none;
            border-radius: 10px;
            background-color: #de3131;
    }
    }
`;

export default TBody;
