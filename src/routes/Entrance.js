import React, {useState, useRef, useEffect} from "react";
import Slider from 'rc-slider';
import styled from 'styled-components';
import LetterChanger from './../LetterChanger';
import munjaOn from '../assets/images/munja-on.png';
import munjaOff from '../assets/images/munja-off.png';
import dowonOn from '../assets/images/dowon-on.png';
import dowonOff from '../assets/images/dowon-off.png';
import tooltipButton from '../assets/images/tooltip.png';
import ReactTooltip from "react-tooltip";
import Switch from "react-switch";

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1920px;
    height: 1240px;
    box-sizing: border-box;
    padding-bottom: 28.6px;
`

const Left = styled.div`
    width: 100%;
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
    height: 1150px;
    padding: 20px;
    -ms-overflow-style: none;
    -scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Input = styled.textarea`
    width: 418px;
    height: 41px;
    margin-right: 86.9px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 19px;
    padding: 10px 22px;
    font-size: 18px;
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
    top: 1062px;
    background: -webkit-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: -moz-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: -o-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    background: linear-gradient(bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);  
`

const Text = styled.div`
    font-size: 13px;
    word-break: keep-all;
    line-height: 1.5;
    white-space: pre;
`

const ResetButton = styled.button`
    width: 418px;
    height: 41px;
    border-radius: 19px;
    margin-right: 86.9px;
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

const ImageButton = styled.div`
    width: 41px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 0;
    // border-width: 0;
    // background-color: black;
    // cursor: pointer;
    // transition: all 0.3s;
    // &:hover {
    //     transform: scale(1.1);
    // }
    // &:disabled {
    //     opacity: 0.4;
    //     cursor: default;
    //     transform: none;
    // }
`

const ButtonImage = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`

const TooltipButton = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
    margin-right: 297px;
`

const SliderWrap = styled.div`
    height: 41px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
                inputRef.current.scrollTop = 8;
            }
        } else {
            // inputRef.current.className += ' error';
            // setTimeout(()=> inputRef.current.className = inputRef.current.className.replace(' error', ''), 300);
        }
    }

    const checkEnter = (e) => {
        if (e.keyCode === 13) {
            inputRef.current.scrollTop = inputRef.current.scrollHeight - 47;
        }
    }

    useEffect(()=> {
        if (inputRef?.current){
            inputRef.current.scrollTop = 8;
        }
    }, [inputRef])

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

    const [state, setState] = useState(false);

    const onClickReset = () => {
        setVoca("");
        setWidth(0);
        setHeight(0);
        setSize(120);
        setDisabled(false);
        setState(false);
        inputRef.current.scrollTop = 8;
    }


    const onChangeSwitch = (checked) => {
        setState(checked);
        setDisabled(true);
    }

    useEffect(()=> {
        if (disabled && state) {
            const length = document.getElementsByClassName('video').length;
            for (var j=0; j<length; j++){
                document.getElementsByClassName('video')[j].currentTime = 0;
                document.getElementsByClassName('video')[j].pause();
            };
        } else if (disabled && !state) {
            const length = document.getElementsByClassName('video').length;
            for (var i=0; i<length; i++){
                document.getElementsByClassName('video')[i].currentTime = 2;
                document.getElementsByClassName('video')[i].pause();
            };
        }
    }, [disabled, state])

    useEffect(()=> {
        setTimeout(()=> {
            const length = document.getElementsByClassName('ballon').length
            for (var i=0; i<length; i++){
                document.getElementsByClassName('ballon')[i].style.display = 'none';
            };
        }, 3000)
    }, [])

    const onMouseEnterTooltip = () => {
        console.log(document.getElementById('tool-tip'));
        document.getElementById('tool-tip').style.display = 'block';
    }

    const onMouseLeaveTooltip = () => {
        document.getElementById('tool-tip').style.display = 'none';
    }

    useEffect(()=> {
        if (voca.length > 0){
            makeWavyAnimation();
        }
    }, [voca])

    return (
        <article style={{width: '100%', boxSizing: 'border-box', maxWidth: 1920, padding: '0 66px'}}>
            <Section>
                <DisplayWrap>
                {
                    voca.split('').map((el,index) =>
                        <LetterChanger key={index} index={index} voca={el} width={width} height={height} size={size} vocas={voca} />
                    )
                }
                </DisplayWrap>
                <LineIngradient />
                <Left>
                    <div style={{position: 'relative'}}>
                    <div id='tool-tip' className="ballon" style={{bottom: 55}}>
                            <Text>
                            {'* 너무 빠르게 타이핑할 시 글리프 형성의\n   시간차가 발생할 수 있습니다.'}
                            </Text>
                            <Text style={{margin: '5px 0'}}>* 최대 30자까지(공백포함) 표현가능합니다.</Text>
                            <Text>* 알파벳으로만 타이핑해주세요.</Text>
                        </div>
                        <TooltipButton onMouseEnter={onMouseEnterTooltip} onMouseLeave={onMouseLeaveTooltip} src={tooltipButton} />
                    </div>
                    <ResetButton
                        style={{display: disabled ? 'block' : 'none'}}
                        disabled={!disabled && width === 0 && height === 0 && size === 120 && voca.length === 0}
                        onClick={onClickReset}>
                        RESET
                    </ResetButton>
                    <div style={{position: 'relative'}}>
                        <div className="ballon" style={{height: 45, padding: '13px 20px', bottom: 60}}>
                                <Text>
                                    이곳에서 타이핑 해보세요.
                                </Text>
                        </div>
                        <Input 
                        style={{display: disabled ? 'none' : 'block'}}
                        disabled={disabled} onKeyUp={checkEnter} ref={inputRef} maxLength={30} placeholder="type here" value={voca} onChange={onChangeHandler} />
                    </div>
                    <SliderBox style={{marginRight: 52.4}}>
                        <SliderWrap>
                            WIDTH
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
                                value={width} max={120} step={10} onChange={value => setWidth(value)}
                            />
                        </SliderWrap>
                        <SliderWrap style={{margin: '0 41.6px'}}>
                            LEADING
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
                                value={height} max={120} step={10} onChange={value => setHeight(value)}
                            />
                        </SliderWrap>
                        <SliderWrap>
                            SIZE
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
                                value={size} min={120} max={360} step={10} onChange={value => setSize(value)}
                            />
                        </SliderWrap>
                    </SliderBox>
                    <div style={{position: 'relative'}}>
                        <div className="ballon" style={{height: 45, padding: '13px 20px', bottom: 60}}>
                                <Text>
                                    타이핑 완료 후 나의 도원을 확인해보세요.
                                </Text>
                        </div>
                        <Switch className="toggle" 
                            disabled={voca.length === 0}
                            width={87} height={41} checked={state} onChange={onChangeSwitch}
                            onColor={'#000'} offColor={'#000'}
                            uncheckedHandleIcon={<ImageButton><ButtonImage src={dowonOn} /></ImageButton>}
                            checkedHandleIcon={<ImageButton><ButtonImage src={munjaOn} /></ImageButton>}
                            uncheckedIcon={<ImageButton style={{marginLeft: 5}}><ButtonImage src={munjaOff} /></ImageButton>}
                            checkedIcon={<ImageButton style={{marginLeft: 2}}><ButtonImage src={dowonOff} /></ImageButton>}
                        />
                    </div>
                </Left>
            </Section>
        </article>
    )
}

export default Entrance;