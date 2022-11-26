import React from "react";
import styled from 'styled-components';
import footerImg from "../assets/images/Footer.png";
import footerVideo from "../assets/images/footer.mp4"

const FooterStyle = styled.div`
    display: flex;
    padding: 4.1vw 0;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    margin: auto;
`

const FooterVideoFirst = styled.video`
    object-fit: contain;
    margin-right: 1320px;
    width: 600px;
    animation: rightToLeft 30s linear infinite;
`
const FooterVideoSecond = styled.video`
    width: 600px;
    object-fit: contain;
    animation: rightToLeft 30s linear infinite;
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
            <div style={{display: 'flex'}}>
                <FooterVideoFirst src={footerVideo} autoPlay loop />
                <FooterVideoSecond src={footerVideo} autoPlay loop />
            </div>
        </footer>
    )
}

export default Footer;