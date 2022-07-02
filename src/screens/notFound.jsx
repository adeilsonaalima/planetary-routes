import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    user-select: none;
    overflow: hidden;
`;

export default function NotFoundScreen() {
    return (
        <Div>
            <h1>Error 404</h1>
            <p>Page Not Found!</p>
            <Link to="/">Back to the home</Link>
        </Div>
    );
}