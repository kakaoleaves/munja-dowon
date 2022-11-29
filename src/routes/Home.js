import React from "react"
import styled from "styled-components"
import OverviewVideo from "../assets/images/overview.mp4";
import TitleVideo from "../assets/images/Title.mp4";
import BackgroundImg1 from "../assets/images/Background-1.mp4";
import BackgroundImg2 from "../assets/images/Background-2.mp4";
import BackgroundImg3 from "../assets/images/Background-3.mp4";
import { Link } from "react-router-dom";
import HeaderButton from "../component/HeaderButton";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

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

`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Image = styled.img`
    object-fit: contain;
`

function Home(){
    const animatedItem = useScrollFadeIn({
        defaultStyle: {marginBottom: 300},
    });

    const animatedItem1 = useScrollFadeIn({
        defaultStyle: {height: 300, objectFit: 'contain'}
    });

    const animatedItem2 = useScrollFadeIn({
        defaultStyle: {objectFit: 'cover'}
    });

    const animatedItem3 = useScrollFadeIn({
        defaultStyle: {}
    });

    const animatedItem4 = useScrollFadeIn({
        defaultStyle: {width: 300}
    });


    return (
        <article>
            <div style={{marginBottom: 200}}>
                <Video style={{marginTop: -100}} src={TitleVideo} autoPlay loop />
            </div>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{width: '100%'}}>
                        <TextSection style={{width: 625}}>
                            <h3>OVERVIEW</h3>
                            <p>
                                문자도원은 문자를 단순한 메세지 전달수단으로서의 기능을 넘어 순수한 예술적 표현으로 승화시킨 동양의 문자도에서 영감을 받아 시작된 프로젝트입니다.
                            </p>
                            <br/>
                            <p>
                                그림과 문자의 경계를 허무는 새로운 표현도구를 제작하고 이를 활용하여 다양한 이미지를 구성합니다.
                            </p>
                            <br/>
                            <p>
                                문자도원에서 제공하는 26가지의 '글리프'를 활용하여 나의 이상향을 투영한 새로운 도원을 만들어보세요.
                            </p>
                        </TextSection>
                        <div>
                            <div style={{height: 36}} />
                            <Video {...animatedItem1} src={OverviewVideo} autoPlay loop />
                        </div>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section style={{marginBottom: 232.5}}>
                <CenteredSection>
                    <RowSectionSpaceBetween>
                        <div/>
                        <h3 style={{width: 625}}>BACKGROUND</h3>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween style={{marginBottom: 80}}>
                        <RowSectionCentered style={{width: 350, height: 180}}>
                            <Video {...animatedItem2} src={BackgroundImg1} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625, display: 'flex', alignItems: 'center'}}>
                            <p>
                                동양의 대표적인 예술 장르중 하나인 '산수화'는 자연물을 아름답게 묘사하는데에 집중하기 보다는, 평안한 삶에 대한 염원이나 종교적, 정치적 신념 등과 같이 자신의 이상향을 자연경관에 투영하여 내면의 메세지를 간접적으로 전달하는 일종의 언어적 표현 수단으로 작동합니다.
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween style={{marginBottom: 80}}>
                    <RowSectionCentered style={{width: 350}}>
                            <Video {...animatedItem3} src={BackgroundImg2} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625, display: 'flex', alignItems: 'center'}}>
                            <p>
                            반대로, 고사에 등장하는 의미있는 내용을 한자 획 속에 반영하여 구성하는, 동양의 또다른 예술 장르인 '문자도'의 경우에는메시지를 이해하기 쉽게 전달하는 것을 넘어 문자를 조형적인 차원에서 접근하게 형태 그 자체를 아름답게 표현합니다.
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween>
                    <RowSectionCentered style={{width: 325}}>
                            <div style={{width:25}} />
                            <Video {...animatedItem4} src={BackgroundImg3} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625}}>
                            <p>
                                그림은 시각적인 아름다움 그 이상의 메시지를 담고있고 문자는 메시지 이상의 아름다운 조형성을 가지고 있습니다.
                            </p>
                            <br/>
                            <p>
                                본 프로젝트에서는 활용 목적과 그 표현 방식이 이분법적으로 고정되어 있던 그림과 문자의 경계가 허물어지는 과정에 주목하여 26가지의 가변적인 글리프를 제작합니다. 
                            </p>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section {...animatedItem}>
                <h3 style={{textAlign: 'center'}}>    
                    표현의 경계가 없는 나만의 이상향
                </h3>
                <h3 style={{textAlign: 'center'}}>    
                    문자도원에 오신 걸 환영합니다.
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={process.env.NODE_ENV === 'production' ? '/munja-dowon/Entrance' : '/Entrance'} style={{marginTop: 80}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <HeaderButton text={'Entrance'} />
                            <div style={{marginTop: 20, textAlign: 'center'}}>바로가기</div>
                        </div>
                    </Link>
                </div>
            </section>
        </article>
    )
}

export default Home;