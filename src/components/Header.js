import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";

const SCHeader = styled(Container)`
    h1 {
        color: #eee;
        margin: 0;
    }

    p {
        color: ${props => props.propsExemple ? "#333" : "#eee"}
    }

    div {
        small {
            font-size: .9em;
        }
    }

    @media screen and (min-width: 300px) {}
`;

export default function () {
    return (
        <SCHeader as="header" propsExemple>
            <h1>Test</h1>
            <p>Test with styled-components</p>
            <div>
                <small>Little tag in div</small>
            </div>
        </SCHeader>
    );
}