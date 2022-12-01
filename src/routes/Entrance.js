import React, {useState, useRef, useEffect} from "react";
import Slider from 'rc-slider';
import styled from 'styled-components';
import LetterChanger from './../LetterChanger';
import imageButton from '../assets/images/ButtonA.png';
import letterButton from '../assets/images/ButtonB.png';
import tooltipButton from '../assets/images/tooltip.png';
import ReactTooltip from "react-tooltip";

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1920px;
`

const Left = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
`

const DisplayWrap = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    box-sizing: border-box;
    width: 1276.5px;
    height: 761px;
    padding: 20px;
    -ms-overflow-style: none;
    -scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Input = styled.textarea`
    width: 384px;
    height: 38px;
    margin-right: 86.9px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 19px;
    padding: 10px 22px;
    line-height: 2;
    -ms-overflow-style: none;
    -scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    &:disabled {
        opacity: 0.4;
        overflow: hidden;
    }
`

const SliderBox = styled.div`
    display: flex;
`

const LineIngradient = styled.div`
    position: absolute;
    width: 100%;
    height: 79px;
    top: 682px;
    background: -webkit-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: -moz-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: -o-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: linear-gradient(bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);  
`

const Text = styled.div`
    font-size: 12px;
    word-break: keep-all;
    line-height: 1.5;
    white-space: pre;
`

const ResetButton = styled.button`
    height: 36px;
    border-radius: 19px;
    padding: 9px 32px;
    background-color: black;
    border: solid 1px white;
    color: white;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
    &:disabled {
        opacity: 0.4;
        cursor: default;
        &: hover {
            background-color: black;
            color: white;
        }
    }
`

const ImageButton = styled.button`
    width: 35.4px;
    height: 35.4px;
    margin: 0;
    border-width: 0;
    background-color: black;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    &:disabled {
        opacity: 0.4;
        cursor: default;
        transform: none;
    }
`

const ButtonImage = styled.img`
    width: 35.4px;
    height: 35.4px;
    object-fit: contain;
`

const TooltipButton = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
    margin: 0 308px 0 14px;
`

function Entrance(){

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(120);

    const [voca, setVoca] = useState('');

    const [disabled, setDisabled] = useState(false);
    
    const inputRef = useRef();
    const onChangeHandler = (e) => {
        const test = /^[a-zA-Z\n ]+$/;
        if (test.test(e.target.value) || e.target.value === "") {
            setVoca(e.target.value.toString().toUpperCase());
            if (!e.target.value.includes("\n")){
                inputRef.current.scrollTop = 6;
            }
        } else {
            // inputRef.current.className += ' error';
            // setTimeout(()=> inputRef.current.className = inputRef.current.className.replace(' error', ''), 300);
        }
    }

    const checkEnter = (e) => {
        if (e.keyCode === 13) {
            inputRef.current.scrollTop = inputRef.current.scrollHeight - 40;
        }
    }

    useEffect(()=> {
        if (inputRef?.current){
            inputRef.current.scrollTop = 6;
        }
    }, [inputRef])

    const onClickDowon = () => {
        setDisabled(true);
        const length = document.getElementsByClassName('video').length;
        for (var i=0; i<length; i++){
            document.getElementsByClassName('video')[i].currentTime = 2;
            document.getElementsByClassName('video')[i].pause();
        };
    }

    const onClickMunja = () => {
        setDisabled(true);
        const length = document.getElementsByClassName('video').length;
        for (var i=0; i<length; i++){
            document.getElementsByClassName('video')[i].currentTime = 0;
            document.getElementsByClassName('video')[i].pause();
        };
    }

    const onClickRestart = () => {
        setVoca("");
        setWidth(0);
        setHeight(0);
        setSize(120);
        setDisabled(false);
        inputRef.current.scrollTop = 6;
    }

    const makeWavyAnimation = () => {
        Array.from(document.getElementsByClassName('video')).forEach((video, index) => {
            setTimeout(() => {
                video.classList.add("wavy");
            }, index * 60 + 200);
          });
    }

    const deleteWavyAnimation = () => {
        Array.from(document.getElementsByClassName('video')).forEach((video) => {
            video.classList.remove("wavy");
          });
    }

    return (
        <article style={{width: '100%', boxSizing: 'border-box', maxWidth: 1920, padding: '0 41px'}}>
            <Section>
                <DisplayWrap onMouseEnter={makeWavyAnimation} onMouseLeave={deleteWavyAnimation}>
                {
                    voca.split('').map((el,index) =>
                        <LetterChanger key={index} index={index} voca={el} width={width} height={height} size={size} vocas={voca} />
                    )
                }
                </DisplayWrap>
                <LineIngradient />
                <Left>
                    <TooltipButton data-tip="tool-tip" src={tooltipButton} />
                    <ReactTooltip>
                        <Text>
                        {'* 빠르게 타이핑할 시 글리프 형성의 시간차가\n발생할 수 있습니다.\n\n*최대 30자까지(공백포함) 표현가능합니다.\n\n알파벳으로만 타이핑해주세요.'}
                        </Text>                        
                    </ReactTooltip>
                    <Input disabled={disabled} onKeyUp={checkEnter} ref={inputRef} maxLength={30} placeholder="type here" value={voca} onChange={onChangeHandler} />
                    <SliderBox>
                        <Slider
                            trackStyle={{height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'}} 
                            railStyle={{
                                height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'
                            }}
                            style={{width: 177.4, boxSizing: 'border-box'}} 
                            handleStyle={{
                                borderRadius: '100%',
                                border: 'none',
                                opacity: 1,
                                width: 14,
                                height: 14,
                                marginTop: -3.5,
                            }}
                            value={width} max={400} step={10} onChange={value => setWidth(value)}
                        />
                        <Slider 
                            trackStyle={{height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'}} 
                            railStyle={{
                                height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'
                            }}
                            style={{width: 177.4, boxSizing: 'border-box', margin: '0 41.6px'}} 
                            handleStyle={{
                                borderRadius: '100%',
                                border: 'none',
                                opacity: 1,
                                width: 14,
                                height: 14,
                                marginTop: -3.5,
                            }}                            
                            value={height} max={400} step={10} onChange={value => setHeight(value)}
                        />
                        <Slider 
                            trackStyle={{height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'}} 
                            railStyle={{
                                height: 7.1, backgroundColor: 'rgba(46, 45, 45, 1)', border: 'solid 1px rgba(112, 112, 112, 1)', boxSizing: 'border-box'
                            }}
                            style={{width: 177.4, boxSizing: 'border-box'}} 
                            handleStyle={{
                                borderRadius: '100%',
                                border: 'none',
                                opacity: 1,
                                width: 14,
                                height: 14,
                                marginTop: -3.5,
                            }}
                            value={size} min={120} max={500} step={10} onChange={value => setSize(value)}
                        />
                    </SliderBox>
                    <ImageButton disabled={voca.length === 0} onClick={onClickDowon} style={{margin: '0 63.4px 0 58.3px'}}>
                        <ButtonImage src={imageButton} />
                    </ImageButton>
                    <ImageButton disabled={voca.length === 0} onClick={onClickMunja} style={{marginRight: 125.4}}>
                        <ButtonImage src={letterButton} />
                    </ImageButton>
                    <ResetButton 
                        disabled={!disabled && width === 0 && height === 0 && size === 120 && voca.length === 0}
                        onClick={onClickRestart}>
                    RESTART
                    </ResetButton>
                </Left>
            </Section>
        </article>
    )
}

export default Entrance;