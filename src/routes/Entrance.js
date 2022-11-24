import React, {useState, useEffect} from "react";
import Slider from 'rc-slider';
import styled from 'styled-components';
import LetterChanger from './../LetterChanger';

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 500px;
`

const Left = styled.div`
    width: 511px;
`

const DisplayWrap = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border: solid 1px white;
    border-radius: 29px;
    width: 1058px;
    box-sizing: border-box;
    height: 761px;
    padding: 20px;
    -ms-overflow-style: none;
    -scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const TextArea = styled.textarea`
    width: 100%;
    max-width: 511px;
    height: 266px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 13px;
    padding: 20px;
    resize: none;
    font-size: 29px;
`

const SliderBox = styled.div`
    margin-top: 31px;
    border: solid 1px white;
    padding: 29.2px;
    border-radius: 23px;
`

const SliderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17.3px;
    font-size: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`

const DiamondButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    padding: 0 20px;
`

const DiamondButton = styled.button`
    border-radius: 25px;
    text-align: center;
    transform: rotate(45deg);
    width: 100px;
    border: solid 1px white;
    cursor: pointer;
    background: black;
    font-size: 20px;
    &:hover {
        background: white;
    }
`

const DiamondButtonText = styled.div`
    display: table-cell;
    height: 100px;
    transform: rotate(-45deg);
    vertical-align: middle;
    width: 100px;
    color: white;
    word-break: keep-all;
    white-space: pre;
    &:hover {
        color: black;
    }
;`

const Handle = styled.div`
    border-radius: 29px;
    width: 18px;
    height: 18px;
    background-color: white;
    transform: rotate(45deg);
`

function Entrance(){

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(200);

    const [voca, setVoca] = useState('');

    const onChangeHandler = (e) => {
        const test = /^[a-zA-Z \n]+$/;
        if (test.test(e.target.value) || e.target.value === "") {
            setVoca(e.target.value);
        }
    }

    const onClickReset = () => {
        setWidth(0);
        setHeight(0);
        setSize(200);
    }

    const onClickViewMyDowon = () => {
        const length = document.getElementsByClassName('video').length;
        for (var i=0; i<length; i++){
            document.getElementsByClassName('video')[i].setAttribute('autoPlay', false);
            document.getElementsByClassName('video')[i].pause();
            document.getElementsByClassName('video')[i].currentTime = 2;   
        };
    }

    useEffect(()=> {
        const length = document.getElementsByClassName('video').length;
        for (var i=0; i<length; i++){
            document.getElementsByClassName('video')[i].load();
        };
    }, [voca])

    return (
        <article>
            <Section>
                <Left>
                    <TextArea maxLength={30} placeholder="type here" value={voca} onChange={onChangeHandler} />
                    <SliderBox>
                        <SliderWrap>
                            <div style={{width: 120}}>
                                가까이 보기
                            </div>
                            <Slider
                                trackStyle={{height: 1, backgroundColor: 'white'}} railStyle={{height: 1}} style={{width: 166.7}} 
                                handleStyle={{
                                    borderRadius: 5,
                                    border: 'none',
                                    opacity: 1,
                                    width: 18,
                                    height: 18,
                                    transform: 'rotate(45deg)',
                                    marginTop: -8,
                                }}
                                value={width} max={400} step={10} onChange={value => setWidth(value)}
                            />
                            <div style={{width: 120}}>
                                떨어져 보기
                            </div>
                        </SliderWrap>
                        <SliderWrap>
                            <div style={{width: 120}}>
                                좁게 보기
                            </div>
                            <Slider 
                                trackStyle={{height: 1, backgroundColor: 'white'}} railStyle={{height: 1}} style={{width: 166.7}}
                                handleStyle={{
                                    borderRadius: 5,
                                    border: 'none',
                                    opacity: 1,
                                    width: 18,
                                    height: 18,
                                    transform: 'rotate(45deg)',
                                    marginTop: -8,
                                }}
                                value={height} max={400} step={10} onChange={value => setHeight(value)}
                            />
                            <div style={{width: 120}}>
                                넓게 보기
                            </div>
                        </SliderWrap>
                        <SliderWrap>
                            <div style={{width: 120}}>
                                작게 보기
                            </div>
                            <Slider 
                                trackStyle={{height: 1, backgroundColor: 'white'}} railStyle={{height: 1}} style={{width: 166.7}}
                                handleStyle={{
                                    borderRadius: 5,
                                    border: 'none',
                                    opacity: 1,
                                    width: 18,
                                    height: 18,
                                    transform: 'rotate(45deg)',
                                    marginTop: -8,
                                }}
                                value={size} min={100} max={500} step={10} onChange={value => setSize(value)}
                            />
                            <div style={{width: 120}}>
                                크게 보기
                            </div>
                        </SliderWrap>
                    </SliderBox>
                    <DiamondButtonWrap>
                        <DiamondButton onClick={onClickReset}>
                            <DiamondButtonText>
                                {'설정\nReset'}
                            </DiamondButtonText>
                        </DiamondButton>
                        <DiamondButton>
                            
                        </DiamondButton>
                        <DiamondButton onClick={onClickViewMyDowon}>
                            <DiamondButtonText>
                                {'나의\n도원보기'}
                            </DiamondButtonText>
                        </DiamondButton>
                    </DiamondButtonWrap>
                    <div style={{marginTop: 50, whiteSpace: 'pre', lineHeight: 1.5}}>
                    {
                        '* 빠르게 타이핑할 시 글리프 형성의 시간차가 발생할 수 있습니다.\n  여유를 가지고 천천히 즐겨주세요.'
                    }
                    </div>
                </Left>
                <DisplayWrap>
                    {
                        voca.split('').map((el,index) =>
                            <LetterChanger key={index} index={index} voca={el} width={width} height={height} size={size} vocas={voca} />
                        )
                    }
                </DisplayWrap>
            </Section>
        </article>
    )
}

export default Entrance;