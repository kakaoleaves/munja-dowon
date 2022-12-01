import React from "react";
import styled from 'styled-components';
import footerImg from "../assets/images/Footer.png";
import footerVideo from "../assets/images/footer.mp4"

const FooterStyle = styled.div`
    display: flex;
    padding-top: 50px;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    margin: auto;
    font-size: 24px;
`

const FooterVideo = styled.video`
    object-fit: contain;
    width: 480px;
    animation: rightToLeft 10s linear infinite;
`

function Footer(){
    return (
        <footer>
            <FooterStyle>
            <div>
                <img style={{width: 358, objectFit: 'contain'}} src={footerImg}/>
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
            <div style={{display: 'flex', overflowX: 'hidden'}}>
                <FooterVideo src={footerVideo} autoPlay loop />
                <FooterVideo src={footerVideo} autoPlay loop />
                <FooterVideo src={footerVideo} autoPlay loop />
                <FooterVideo src={footerVideo} autoPlay loop />
                <FooterVideo src={footerVideo} autoPlay loop />
            </div>
        </footer>
    )
}

export default Footer;