import React, {useState, useRef} from "react";
import Slider from 'rc-slider';
import styled from 'styled-components';
import LetterChanger from './../LetterChanger';

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 300px;
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
    width: 656px;
    height: 36px;
    text-align: center;
    box-sizing: border-box;
    background-color: white;
    border-radius: 19px;
    padding: 10px 22px;
    margin-right: 55.9px;
    line-height: 1.3;
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
    position: absolute;
    bottom: 70px;
    right: 0px;
    font-size: 12px;
    width: 220px;
    word-break: keep-all;
    line-height: 1.5;
`

function Entrance(){

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(200);

    const [voca, setVoca] = useState('');

    const inputRef = useRef();
    const onChangeHandler = (e) => {
        const test = /^[a-zA-Z\n ]+$/;
        if (test.test(e.target.value) || e.target.value === "") {
            setVoca(e.target.value.toString().toUpperCase());
            if (!e.target.value.includes("\n")){
                inputRef.current.scrollTop = 0;
            }
        } else {
            // inputRef.current.className += ' error';
            // setTimeout(()=> inputRef.current.className = inputRef.current.className.replace(' error', ''), 300);
        }
    }

    const checkEnter = (e) => {
        if (e.keyCode === 13) {
            inputRef.current.scrollTop = inputRef.current.scrollHeight;
        }
    }

    // useEffect(()=> {
    //     const length = document.getElementsByClassName('video').length;
    //     for (var i=0; i<length; i++){
    //         document.getElementsByClassName('video')[i].load();
    //     };
    // }, [voca])

    return (
        <article>
            <Section>
                <DisplayWrap>
                {
                    voca.split('').map((el,index) =>
                        <LetterChanger key={index} index={index} voca={el} width={width} height={height} size={size} vocas={voca} />
                    )
                }
                </DisplayWrap>
                <LineIngradient />
                <Text>
                    {'* 빠르게 타이핑할 시 글리프 형성의 시간차가\n발생할 수 있습니다.'}
                </Text>
                <Left>
                    <Input onKeyUp={checkEnter} ref={inputRef} maxLength={30} placeholder="type here" value={voca} onChange={onChangeHandler} />
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
                            value={size} min={200} max={500} step={10} onChange={value => setSize(value)}
                        />
                    </SliderBox>
                </Left>
            </Section>
        </article>
    )
}

export default Entrance;