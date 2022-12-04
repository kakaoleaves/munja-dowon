import React, {useRef, useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import processMain from '../assets/images/Process-main.png';
import angle from '../assets/images/Angle.mp4';
import size from '../assets/images/Size.mp4';
import dot from '../assets/images/Dot.png';
import HoverVideoPlayer from 'react-hover-video-player';
import Footer from './../component/Footer';

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

const Pre = styled.p`
    white-space: pre;
`

const Video = (props) => {
    return <View>
        <HoverVideoPlayer videoClassName="size-video" videoSrc={props?.src} restartOnPaused loop />
    </View>
}

function Munja(){

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
                        <Image style={{width: 385, marginRight: 173}} src={processMain} />
                        <TextSection style={{width: 613}}>
                            <h3 style={{marginBottom: 24}}>PROCESS</h3>
                            <Pre>
                                {'기하학적 형태의 모듈을 반복과 중첩을 바탕으로 구성된 동양의\n전통문양에서 영감을 받아, 마름모꼴의 도형을 기본모듈로 지정\n하고 그리드 시스템에 따라 문자의 구조를 형성합니다.'}
                            </Pre>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <video style={{height: 925, marginLeft: -190, objectFit: 'cover'}} src={angle} autoPlay loop />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start', marginTop: 90}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image id='angle-img' src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>ANGLE</h3>
                        </div>
                        <Pre style={{width: '60%'}}>
                            {'글자를 이루는 기본 모듈이 45 ° 를 기준으로 회전하면서 문자의 뉘앙스가\n변화합니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 300}}>
                <CenteredSection>
                    {/* <div>
                        <div className='dot-animated-container'>
                            <Video src={sizeA} />
                            <Video src={sizeB} />
                            <Video src={sizeC} />
                            <Video src={sizeD} />
                            <Video src={sizeE} />
                            <Video src={sizeF} />
                            <Video src={sizeG} />
                        </div>
                        <div className='dot-animated-container'>
                            <Video src={sizeH} />
                            <Video src={sizeI} />
                            <Video src={sizeJ} />
                            <Video src={sizeK} />
                            <Video src={sizeL} />
                            <Video src={sizeM} />
                            <Video src={sizeN} />
                        </div>
                        <div className='dot-animated-container'>
                            <Video src={sizeO} />
                            <Video src={sizeP} />
                            <Video src={sizeQ} />
                            <Video src={sizeR} />
                            <Video src={sizeS} />
                            <Video src={sizeT} />
                            <Video src={sizeU} />
                        </div>
                        <div className='dot-animated-container'>
                            <Video src={sizeV} />
                            <Video src={sizeW} />
                            <Video src={sizeX} />
                            <Video src={sizeY} />
                            <Video src={sizeZ} />
                        </div>
                    </div> */}
                    <video style={{height: 925, marginLeft: -190, objectFit: 'cover'}} src={size} autoPlay loop />
                    <TextSection style={{display: 'flex', alignItems: 'flex-start', marginTop: 90}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}>
                            <Image id='size-img' src={dot} />
                            <h3 style={{margin: '0 0 0 15px'}}>SIZE</h3>
                        </div>
                        <Pre style={{width: '60%'}}>
                            {'문자를 이루는 기본모듈이 100~130% 내의 범위에서 확대 축소되며 뉘앙스가\n변화합니다.'}
                        </Pre>
                    </TextSection>
                </CenteredSection>
            </section>
        </article>
        <Footer />
    </Fragment>
    )
}

export default Munja;
