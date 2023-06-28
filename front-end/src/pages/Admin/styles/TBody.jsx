import styled from 'styled-components';

const TBody = styled.tbody`
    @media only screen and (min-width: 360px) and (max-width: 480px) {
        tr {
            line-height: 1.5rem;
            border-top: 2px solid #433F5A;
        }

        td {
            background-color: #ffffff80;
            font-weight: bold;
        }

        button {
            width: 25px;
            height: 25px;
            font-size: 12px;
            border: none;
            border-radius: 10px;
            background-color: #de3131;
    }
    }
`;

export default TBody;
