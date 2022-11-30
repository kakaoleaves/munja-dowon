import React from 'react';
import styled from 'styled-components';
import dowonProcess from '../assets/images/Dowon-process.png';
import graphicStyle from '../assets/images/Graphic-style.png';
import sky from '../assets/images/Sky.png';
import earth from '../assets/images/Earth.png';
import between from '../assets/images/Between.png';
import dot from '../assets/images/Dot.png';

const RowSectionSpaceBetween = styled.div`
display: flex;
`

const Categorize = styled.div`
    width: 950px;
    margin-bottom: 145px;
    position: relative;
`

const CategorizeText = styled.p`
    width: 300px;
    position: absolute;
    left: 970px;
    bottom: -60px;
`

const CenteredSection = styled.div`
    margin: auto;
    width: 1222.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TextSection = styled.div`
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

function Dowon(){
    return (
        <article>
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
                            {'도원을 구성하는 26가지의 자연물 글리프들은 모두 금수강산을 이루는 자연물\n의 형상을 바탕으로 제작되었고 26개의 각 알파벳에 대응합니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 300}}>
                <CenteredSection>
                    <Categorize>
                        <Image src={sky} />
                        <CategorizeText>{'天 (하늘)'}</CategorizeText>
                    </Categorize>
                    <Categorize>
                        <Image src={earth} />
                        <CategorizeText>{'地 (하늘과 땅 사이)'}</CategorizeText>
                    </Categorize>
                    <Categorize>
                        <Image src={between} />
                        <CategorizeText>{'間 (땅)'}</CategorizeText>
                    </Categorize>
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image style={{width: 22.9}} src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>CATEGORIZE</h3>
                        </div>
                        <Pre style={{width: '60%'}}>
                            {'자연물의 이미지들은 동양사상에서 이세상을 의미하는 천지간(天地間)에 따라\n그 종류가 나뉘며 각각 하늘(해, 달, 구름), 땅(산봉우리) 그리고 그 사이의 생명\n들(폭포, 소나무)을 상징하는 형상으로 구성되어 있습니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
        </article>
    )
}

export default Dowon;

