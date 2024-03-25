import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #1e3786
    }

    & > a.active {
        text-decoration: none;
        color: #03aeff
    }

    & > a:hover {
        color: steelblue;
    }
`

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    img {
        width: 300px;
    }
`

export const S = {
    NavWrapper, FlexWrapper
}