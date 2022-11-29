import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import processMain from '../assets/images/Process-main.png';
import angle from '../assets/images/Angle.png';
import size from '../assets/images/Alphabet-Size.mp4';
import dot from '../assets/images/Dot.png';
import sizeA from '../assets/images/size/A.mp4';
import sizeB from '../assets/images/size/B.mp4';
import sizeC from '../assets/images/size/C.mp4';
import sizeD from '../assets/images/size/D.mp4';
import sizeE from '../assets/images/size/E.mp4';
import sizeF from '../assets/images/size/F.mp4';
import sizeG from '../assets/images/size/G.mp4';
import sizeH from '../assets/images/size/H.mp4';
import sizeI from '../assets/images/size/I.mp4';
import sizeJ from '../assets/images/size/J.mp4';
import sizeK from '../assets/images/size/K.mp4';
import sizeL from '../assets/images/size/L.mp4';
import sizeM from '../assets/images/size/M.mp4';
import sizeN from '../assets/images/size/N.mp4';
import sizeO from '../assets/images/size/O.mp4';
import sizeP from '../assets/images/size/P.mp4';
import sizeQ from '../assets/images/size/Q.mp4';
import sizeR from '../assets/images/size/R.mp4';
import sizeS from '../assets/images/size/S.mp4';
import sizeT from '../assets/images/size/T.mp4';
import sizeU from '../assets/images/size/U.mp4';
import sizeV from '../assets/images/size/V.mp4';
import sizeW from '../assets/images/size/W.mp4';
import sizeX from '../assets/images/size/X.mp4';
import sizeY from '../assets/images/size/Y.mp4';
import sizeZ from '../assets/images/size/Z.mp4';
import angleA from '../assets/images/angle/A.mp4';
import angleB from '../assets/images/angle/B.mp4';
import angleC from '../assets/images/angle/C.mp4';
import angleD from '../assets/images/angle/D.mp4';
import angleE from '../assets/images/angle/E.mp4';
import angleF from '../assets/images/angle/F.mp4';
import angleG from '../assets/images/angle/G.mp4';
import angleH from '../assets/images/angle/H.mp4';
import angleI from '../assets/images/angle/I.mp4';
import angleJ from '../assets/images/angle/J.mp4';
import angleK from '../assets/images/angle/K.mp4';
import angleL from '../assets/images/angle/L.mp4';
import angleM from '../assets/images/angle/M.mp4';
import angleN from '../assets/images/angle/N.mp4';
import angleO from '../assets/images/angle/O.mp4';
import angleP from '../assets/images/angle/P.mp4';
import angleQ from '../assets/images/angle/Q.mp4';
import angleR from '../assets/images/angle/R.mp4';
import angleS from '../assets/images/angle/S.mp4';
import angleT from '../assets/images/angle/T.mp4';
import angleU from '../assets/images/angle/U.mp4';
import angleV from '../assets/images/angle/V.mp4';
import angleW from '../assets/images/angle/W.mp4';
import angleX from '../assets/images/angle/X.mp4';
import angleY from '../assets/images/angle/Y.mp4';
import angleZ from '../assets/images/angle/Z.mp4';
import HoverVideoPlayer from 'react-hover-video-player';

const anime = require('animejs');

const RowSectionSpaceBetween = styled.div`
display: flex;
`
const RowSectionCentered = styled.div`
display: flex;
justify-content: center;
`

const CenteredSection = styled.div`
margin: auto;
max-width: 1222.5px;
`

const TextSection = styled.div`
word-break: keep-all;
font-size: 20px;
`

const Image = styled.img`
object-fit: contain;
`

const View = styled.div`
    transition: all 0.3s;
    &:hover {
        z-index: 50;
        transform: scale(1.1);
    }  
`

const Video = (props) => {
    return <View>
        <HoverVideoPlayer videoClassName="size-video" videoSrc={props?.src} restartOnPaused loop />
    </View>
}

function Munja(){

    return (
        <article>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{alignItems: 'flex-end'}}>
                        <Image style={{width: 385, marginRight: 173}} src={processMain} />
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
                <div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={angleA} />
                            <Video src={angleB} />
                            <Video src={angleC} />
                            <Video src={angleD} />
                            <Video src={angleE} />
                            <Video src={angleF} />
                            <Video src={angleG} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={angleH} />
                            <Video src={angleI} />
                            <Video src={angleJ} />
                            <Video src={angleK} />
                            <Video src={angleL} />
                            <Video src={angleM} />
                            <Video src={angleN} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={angleO} />
                            <Video src={angleP} />
                            <Video src={angleQ} />
                            <Video src={angleR} />
                            <Video src={angleS} />
                            <Video src={angleT} />
                            <Video src={angleU} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={angleV} />
                            <Video src={angleW} />
                            <Video src={angleX} />
                            <Video src={angleY} />
                            <Video src={angleZ} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                    </div>
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image id='angle-img' src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>ANGLE</h3>
                        </div>
                        <div style={{width: '60%'}}>
                            기본 모듈의 각도를 45 ° 씩 변경하여 문자의 스타일을 변경할 수 있습니다.
                        </div>
                    </TextSection>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 300}}>
                <CenteredSection>
                    <div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={sizeA} />
                            <Video src={sizeB} />
                            <Video src={sizeC} />
                            <Video src={sizeD} />
                            <Video src={sizeE} />
                            <Video src={sizeF} />
                            <Video src={sizeG} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={sizeH} />
                            <Video src={sizeI} />
                            <Video src={sizeJ} />
                            <Video src={sizeK} />
                            <Video src={sizeL} />
                            <Video src={sizeM} />
                            <Video src={sizeN} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={sizeO} />
                            <Video src={sizeP} />
                            <Video src={sizeQ} />
                            <Video src={sizeR} />
                            <Video src={sizeS} />
                            <Video src={sizeT} />
                            <Video src={sizeU} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                        <div className='dot-animated-container'>
                            {/* <div className='animated-dot'/> */}
                            <Video src={sizeV} />
                            <Video src={sizeW} />
                            <Video src={sizeX} />
                            <Video src={sizeY} />
                            <Video src={sizeZ} />
                            {/* <div className='animated-dot-bottom'/>                             */}
                        </div>
                    </div>
                    <TextSection style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image id='size-img' src={dot} />
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
