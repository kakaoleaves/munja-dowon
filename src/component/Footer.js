import React from "react";
import styled from 'styled-components';
import footerImg from "../assets/images/Footer.png";

const FooterStyle = styled.div`
    display: flex;
    padding: 50px 0 100px;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    margin: auto;
    font-size: 24px;
`

function Footer(){
    return (
        <footer>
            <FooterStyle>
            <div>
                <img style={{height: 28.3, objectFit: 'contain'}} src={footerImg}/>
                <div>© 2022 Hyunjoon Han</div>
            </div>
            <div>
                <div>기획 & 그래픽 & 모션 I 한현준</div>
                <div>guswns9630@naver.com</div>
            </div>
            <div>
                <div>웹 개발 I 이한영</div>
                <div>kakaoleaves@naver.com</div>
            </div>
            </FooterStyle>
        </footer>
    )
}

export default Footer;