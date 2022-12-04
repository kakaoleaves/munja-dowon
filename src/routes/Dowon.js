import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import dowonProcess from '../assets/images/Dowon-process.png';
import graphicStyle from '../assets/images/Graphic-style.png';
import sky from '../assets/images/Sky.png';
import earth from '../assets/images/Earth.png';
import between from '../assets/images/Between.png';
import dot from '../assets/images/Dot.png';
import Footer from '../component/Footer';

const RowSectionSpaceBetween = styled.div`
    display: flex;
`

const Categorize = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 96.9px;
`

const CategorizeText = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    white-space: pre;
`

const LargeText = styled.div`
    font-size: 24px;
    margin-right: 10px;
`;

const CenteredSection = styled.div`
    margin: auto;
    width: 1222.5px;
`

const TextSection = styled.div`
    width: 1220px;
    word-break: keep-all;
    font-size: 20px;
    line-height: 1.5;
`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
`

const Pre = styled.p`
    white-space: pre;
`

const DotLine = styled.div`
    width: 1094.3px;
    height: 1px;
    box-sizing: border-box;
    border: dashed 1px rgba(84, 84, 84, 1);
`

const CenteredRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 36.5px;
`

function Dowon(){

    const [scrollEnd, setScrollEnd] = useState(false);

    const handleScroll = () => {
        const html = document.querySelector('html');
        setScrollEnd(Math.floor(html.scrollHeight - html.scrollTop) === html.clientHeight);
    };
    
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <Fragment>
        <article>
            {
                !scrollEnd &&
                <div className="scroll">
                    <span />
                </div>
            }
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{alignItems: 'flex-end'}}>
                        <Image style={{width: 385, marginRight: 173}} src={dowonProcess} />
                        <TextSection style={{width: 613}}>
                            <h3 style={{marginBottom: 24}}>PROCESS</h3>
                            <p>
                                각 알파벳 모듈의 포지션 값을 조정하여 26가지의 문자에 각각 대입되는 자연물 이미지의 글리프를 제작합니다.
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 350}}>
                <CenteredSection>
                    <Image style={{width: '100%', marginBottom: 140}} src={graphicStyle} />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image style={{width: 22.9}} src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>GRAPHIC STYLE</h3>
                        </div>
                        <Pre style={{width: '60%'}}>
                            {'도원을 구성하는 26가지의 자연물 글리프들은 모두 금수강산을 이루는\n자연물의 형상을 바탕으로 제작되었고 26개의 각 알파벳에 대응합니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 300}}>
                <CenteredSection>
                    <Categorize>
                        <CenteredRow>
                            <CategorizeText><LargeText>天</LargeText>(하늘)</CategorizeText>
                            <DotLine/>
                        </CenteredRow>
                        <Image style={{width: 950}} src={sky} />
                    </Categorize>
                    <Categorize>
                        <CenteredRow>
                            <CategorizeText><LargeText>間</LargeText>(간)</CategorizeText>
                            <DotLine/>
                        </CenteredRow>
                        <Image style={{width: 950}} src={earth} />
                    </Categorize>
                    <Categorize>
                        <CenteredRow>
                            <CategorizeText><LargeText>地</LargeText>(땅)</CategorizeText>
                            <DotLine/>
                        </CenteredRow>
                        <Image style={{width: 950}} src={between} />
                    </Categorize>
                    <TextSection style={{display: 'flex', alignItems: 'flex-start', marginTop: 80}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image style={{width: 22.9}} src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>CATEGORIZE</h3>
                        </div>
                        <Pre style={{width: '60%'}}>
                            {'자연물의 이미지들은 동양사상에서 이 세상을 의미하는 천지간(天地間)에 따라\n그 종류가 나뉘며 각각 하늘(해, 달, 구름), 땅(산봉우리) 그리고 그 사이의 \n생명들(폭포, 소나무)을 상징하는 형상으로 구성되어 있습니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
        </article>
        <Footer/>
        </Fragment>
    )
}

export default Dowon;

