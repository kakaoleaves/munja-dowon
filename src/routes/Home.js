import React, { Fragment } from "react"
import styled from "styled-components"
import OverviewVideo from "../assets/images/overview.mp4";
import TitleVideo from "../assets/images/Title.mp4";
import BackgroundImg1 from "../assets/images/Background-1.mp4";
import BackgroundImg2 from "../assets/images/Background-2.mp4";
import BackgroundImg3 from "../assets/images/Background-3.mp4";
import { Link } from "react-router-dom";
import HeaderButton from "../component/HeaderButton";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Footer from './../component/Footer';

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

const TextWrap = styled.div`
    height: 323px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Pre = styled.p`
    white-space: pre;
`

const EntranceText = styled.div`
    text-align: center;
    font-size: 35px;
    letter-spacing: 0.84px;
    white-space: pre;
    line-height: 50px;
`

function Home(){
    const animatedItem = useScrollFadeIn({
        defaultStyle: {marginBottom: 323},
    });

    const animatedItem1 = useScrollFadeIn({
        defaultStyle: {height: 323, objectFit: 'contain'}
    });

    const animatedItem2 = useScrollFadeIn({
        defaultStyle: {objectFit: 'cover'}
    });

    const animatedItem3 = useScrollFadeIn({
        defaultStyle: {objectFit: 'cover', height: 270}
    });

    const animatedItem4 = useScrollFadeIn({
        defaultStyle: {width: 300, objectFit: 'cover'}
    });

    return (
    <Fragment>
      <article>
            <div style={{marginBottom: 200}}>
                <Video style={{marginTop: -100}} src={TitleVideo} autoPlay loop />
            </div>
            <section style={{marginBottom: 250}}>
                <CenteredSection>
                    <RowSectionSpaceBetween style={{width: '100%'}}>
                        <TextSection style={{width: 625}}>
                            <h3 style={{marginBottom: 24}}>OVERVIEW</h3>
                            <TextWrap>
                            <Pre>
                                {'문자도원은 문자를 단순한 메세지 전달수단으로서의 기능을 넘어\n순수한 예술적 표현으로 승화시킨 동양의 문자도에서 영감을 받아\n시작된 프로젝트입니다.'}
                            </Pre>
                            <Pre>
                                {'그림과 문자의 경계를 허무는 새로운 표현도구를 제작하고\n이를 활용하여 다양한 이미지를 구성합니다.'}
                            </Pre>
                            <Pre>
                                {"문자도원에서 제공하는 26가지의 '글리프'를 활용하여\n나의 이상향을 담은 새로운 도원을 만들어보세요."}
                            </Pre>
                            </TextWrap>
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
                        <h3 style={{width: 625, marginBottom: 10}}>BACKGROUND</h3>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween style={{marginBottom: 80}}>
                        <RowSectionCentered style={{width: 350, height: 180}}>
                            <Video {...animatedItem2} src={BackgroundImg1} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625, display: 'flex', alignItems: 'center'}}>
                            <Pre>
                                {'동양의 ‘산수화’는 자연물을 아름답게 묘사하는데에 집중하기 보다\n는, 평안한 삶에 대한 염원이나 종교적, 정치적 신념 등과 같은 자신\n의 이상향을 자연경관에 투영하여 내면의 메시지를 간접적으로 드러\n내는 일종의 언어입니다.'}
                            </Pre>
                        </TextSection>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween style={{marginBottom: 80}}>
                    <RowSectionCentered style={{width: 350}}>
                            <Video {...animatedItem3} src={BackgroundImg2} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625, display: 'flex', alignItems: 'center'}}>
                            <Pre>
                                {'그와 반대로, 옛 고서의 이야기를 한자의 획 속에 반영하여 표현하는\n동양의 또 다른 예술 장르인  ‘문자도’의 경우에는 메시지의 전달과는\n별개로 각 문자들의 조형적 표현 그 자체가 미학적인 의미를 가지기\n도 합니다.'}
                            </Pre>
                        </TextSection>
                    </RowSectionSpaceBetween>
                    <RowSectionSpaceBetween>
                    <RowSectionCentered style={{width: 325}}>
                            <div style={{width:25}} />
                            <Video {...animatedItem4} src={BackgroundImg3} autoPlay loop />
                        </RowSectionCentered>
                        <TextSection style={{width: 625}}>
                            <TextWrap style={{height: 232.8}}>
                            <Pre>
                               {'그림은 시각적인 아름다움 그 이상의 메시지를 담고있고 문자는 메시\n지 그 이상의 아름다운 조형성을 가지고 있습니다.'}
                            </Pre>
                            <Pre>
                                {'본 프로젝트에서는 동양화에서 그림과 문자가 가진 본래의 목적성과\n기능의 경계가 허물어지는 과정에 주목하여 26종류의 가변적인 글\n리프를 제작합니다.'}
                            </Pre>
                            </TextWrap>
                        </TextSection>
                    </RowSectionSpaceBetween>
                </CenteredSection>
            </section>
            <section {...animatedItem}>
                <EntranceText>    
                    {'표현의 경계가 없는 나만의 이상향,\n문자도원에 오신 걸 환영합니다.'}
                </EntranceText>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={process.env.NODE_ENV === 'production' ? '/munja-dowon/Entrance' : '/Entrance'} style={{marginTop: 80}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <HeaderButton text={'Entrance'} />
                            <div style={{marginTop: 19, textAlign: 'center'}}>바로가기</div>
                        </div>
                    </Link>
                </div>
            </section>
        </article>
        <Footer />
    </Fragment>
    )
}

export default Home;