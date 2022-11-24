import React, {useState} from "react";
import Slider from 'rc-slider';
import styled from 'styled-components';
import LetterChanger from './../LetterChanger';

const Section = styled.section`
    margin-bottom: 500px;
    display: flex;
`

const DisplayWrap = styled.div`
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border: solid 1px white;
    border-radius: 29px;
    height: 900px;
    padding: 20px;
`

const TextArea = styled.textarea`
    width: 770px;
    background-color: white;
    border-radius: 13px;
    padding: 10px;
`

function Entrance(){

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(200);

    const [voca, setVoca] = useState('');

    const onChangeHandler = (e) => {
        const test = /^[a-zA-Z ]+$/;
        if (test.test(e.target.value) || e.target.value === "") {
            setVoca(e.target.value);
        }
    }

    return (
        <article>
            <Section>
                <DisplayWrap>
                    {
                        voca.split('').map((el,index) =>
                            <LetterChanger key={index} voca={el} width={width} height={height} size={size} />
                        )
                    }
                </DisplayWrap>
                <div style={{marginTop: 38, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextArea maxLength={30} placeholder="type here" value={voca} onChange={onChangeHandler} />
                    <Slider style={{width: 150}} value={width} max={20} step={1} onChange={value => setWidth(value)} />
                    <Slider style={{width: 150}} value={height} max={50} step={5} onChange={value => setHeight(value)} />
                    <Slider style={{width: 150}} value={size} min={100} max={500} step={10} onChange={value => setSize(value)}/>
                </div>
            </Section>
        </article>
    )
}

export default Entrance;