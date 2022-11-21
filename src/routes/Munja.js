import React from 'react';
import styled from 'styled-components';
import processMain from '../assets/images/Process-main.png';
import angle from '../assets/images/Angle.png';
import size from '../assets/images/Alphabet-Size.mp4';
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
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Image = styled.img`
object-fit: contain;
`
function Munja(){
    return (
        <article>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{alignItems: 'flex-end'}}>
                        <Image style={{width: 385}} src={processMain} />
                        <TextSection style={{width: 613}}>
                            <h3>PROCESS</h3>
                            <p>
                                기하학적 형태의 모듈을 반복과 중첩을 바탕으로 구성된 동양의 전통문양에서 영감을 받아, 마름모꼴의 도형을 기본모듈로 지정하고 그리드 시스템에 따라 문자의 구조를 형성합니다.
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <Image style={{width: '100%', marginBottom: 100}} src={angle} />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>ANGLE</h3>
                        </div>
                        <div style={{width: '60%'}}>
                            기본 모듈의 각도를 45 ° 씩 변경하여 문자의 스타일을 변경할 수 있습니다.
                        </div>
                    </TextSection>
                </CenteredSection>
            </section>
            <section>
                <CenteredSection>
                    <Video style={{width: 1440, marginLeft: -240, marginBottom: 100}} src={size} autoPlay loop />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>SIZE</h3>
                        </div>
                        <div style={{width: '60%'}}>
                            기본 모듈의 각도가 45 ° 씩 변경되며 문자가 가진 뉘앙스가 변화합니다.
                        </div>
                    </TextSection>
                </CenteredSection>
            </section>
        </article>
    )
}

export default Munja;
