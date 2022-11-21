import './App.css';
import {useEffect, useMemo, useState} from "react";
import Slider from 'rc-slider';
import LetterChanger from "./LetterChanger";

function App() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState(100);

    const [voca, setVoca] = useState('');

    const onChangeHandler = (e) => {
        const test = /^[a-zA-Z., ]/;
        if (test.test(e.target.value) || e.target.value == "") {
            setVoca(e.target.value);
        }
    }

    return (
        <article>
            <div className='content' style={{width: '100%'}}>
                {/*<div className="samples" contentEditable="true" autocomplete="off" autoCorrect="off" autoCapitalize="off"*/}
                {/*     spellCheck="false">*/}
                {/*    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>*/}
                {/*    abcdefghijklmnopqrstuvwxyz 0123456789<br/>*/}
                {/*    ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ<br/>*/}
                {/*    αβγδεζηθικλμνξοπρσςτυφχψω <br/>*/}
                {/*    АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ<br/>*/}
                {/*    абвгдежзийклмнопрстуфхцчшщъыьэюя<br/>*/}
                {/*</div>*/}
                <input onChange={onChangeHandler} />
                <div style={{width: 200}}>
                    <Slider value={width} max={20} step={1} onChange={value => setWidth(value)} />
                    <Slider value={height} max={20} step={1} onChange={value => setHeight(value)} />
                    <Slider value={size} min={100} max={1000} step={10} onChange={value => setSize(value)}/>
                </div>
                <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                    {
                        voca.split('').map((el,index) =>
                            <LetterChanger key={index} voca={el} width={width} height={height} size={size} />
                        )
                    }
                </div>
            </div>
        </article>
    );
}

export default App;
