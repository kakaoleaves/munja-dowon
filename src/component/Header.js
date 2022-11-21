import HeaderButton from "./HeaderButton";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import headerLogo from "../assets/images/Header.png";

const HeaderStyle = styled.div`
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
`
const HeaderLogo = styled.img`
    position: absolute;
    z-index: 100;
    top: 60px;
    left: 90px;
    width: 64px;
    height: 64px;
    fit-object: contain;
`

const navigations = ['Home', 'Munja', 'Dowon', 'Entrance']

export default function Header(){
    return (
        <header>
            <HeaderLogo src={headerLogo} />
            <HeaderStyle>
                {
                    navigations.map(navigation => 
                        <Link key={navigation} to={navigation}>
                            <HeaderButton text={navigation}/>
                        </Link>
                    )
                }
            </HeaderStyle>
        </header>    
    )
}