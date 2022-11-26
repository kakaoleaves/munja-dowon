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
justify-content: space-between;
`
const RowSectionCentered = styled.div`
display: flex;
justify-content: center;
`

const CenteredSection = styled.div`
margin: auto;
max-width: 1024px;
`

const TextSection = styled.div`
word-break: keep-all;
font-size: 20px;
line-height: 1.5;
`

const Image = styled.img`
object-fit: contain;
`
function Dowon(){
    return (
        <article>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{alignItems: 'flex-end'}}>
                        <Image style={{width: 385}} src={dowonProcess} />
                        <TextSection style={{width: 613}}>
                            <h3>PROCESS</h3>
                            <p>
                                각 알파벳 모듈의 포지션 값을 조정하여 26가지의 문자에 각각 대입되는 자연물 이미지의 글리프를 제작합니다.
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <Image style={{width: '100%', marginBottom: 100}} src={graphicStyle} />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>GRAPHIC STYLE</h3>
                        </div>
                        <div style={{width: '60%'}}>
                            도원을 형성하는 26가지의 글리프들은 모두 금수강산을 이루는 자연물의 형상을 바탕으로 제작되었습니다.
                        </div>
                    </TextSection>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 300}}>
                <CenteredSection>
                    <RowSectionSpaceBetween>
                        <div style={{width: 70}}>
                            <div>天</div>
                            <div>(하늘)</div>
                        </div>
                        <Image style={{width: 950, marginBottom: 100}} src={sky} />
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween>
                    <div style={{width: 70}}>
                            <div>地</div>
                            <div>(땅)</div>
                        </div>
                        <Image style={{width: 950, marginBottom: 100}} src={earth} />
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween>
                    <div style={{width: 70}}>
                            <div>間</div>
                            <div>(사이)</div>
                        </div>
                        <Image style={{width: 950, marginBottom: 100}} src={between} />
                    </RowSectionSpaceBetween>
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>CATEGORIZE</h3>
                        </div>
                        <div style={{width: '60%'}}>
                            자연물의 이미지들은 동양사상에서 이세상을 의미하는 천지간(天地間)에 따라 그 종류가 나뉘며 각각 하늘(해, 달, 구름), 땅(산봉우리) 그리고 그 사이의 생명들(폭포, 소나무)을 상징하는 형상으로 구성되어 있습니다.
                        </div>
                    </TextSection>
                </CenteredSection>
            </section>
        </article>
    )
}

export default Dowon;

