import React from "react";
import styled from 'styled-components';

const HButton = styled.div`
    display: inline-block;
    border: 2px solid white;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 10px 35px;
    box-sizing: border-box;
    &:hover {
        background: white;
        color: black;
    }
`

function HeaderButton({text}){
    return <HButton>{text}</HButton>
}

export default HeaderButton;