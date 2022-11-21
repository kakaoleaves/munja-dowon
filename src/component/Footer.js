import React from "react";
import styled from 'styled-components';
import footerImg from "../assets/images/Footer.png";

const FooterStyle = styled.div`
    display: flex;
    padding: 4.1vw 0;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    margin: auto;
`


function Footer(){
    return (
        <footer>
            <FooterStyle>
            <div>
                <img src={footerImg}/>
                <div>© 2022 Hyunjoon Han</div>
            </div>
            <div>
                <div>글자 & 그래픽 디자인 I 모션 한현준</div>
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