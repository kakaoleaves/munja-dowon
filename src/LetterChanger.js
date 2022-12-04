import React, { useMemo } from 'react';
import gifLetterA from './assets/images/A-compressed.mp4';
import gifLetterB from './assets/images/B-compressed.mp4';
import gifLetterC from './assets/images/C-compressed.mp4';
import gifLetterD from './assets/images/D-compressed.mp4';
import gifLetterE from './assets/images/E-compressed.mp4';
import gifLetterF from './assets/images/F-compressed.mp4';
import gifLetterG from './assets/images/G-compressed.mp4';
import gifLetterH from './assets/images/H-compressed.mp4';
import gifLetterI from './assets/images/I-compressed.mp4';
import gifLetterJ from './assets/images/J-compressed.mp4';
import gifLetterK from './assets/images/K-compressed.mp4';
import gifLetterL from './assets/images/L-compressed.mp4';
import gifLetterM from './assets/images/M-compressed.mp4';
import gifLetterN from './assets/images/N-compressed.mp4';
import gifLetterO from './assets/images/O-compressed.mp4';
import gifLetterP from './assets/images/P-compressed.mp4';
import gifLetterQ from './assets/images/Q-compressed.mp4';
import gifLetterR from './assets/images/R-compressed.mp4';
import gifLetterS from './assets/images/S-compressed.mp4';
import gifLetterT from './assets/images/T-compressed.mp4';
import gifLetterU from './assets/images/U-compressed.mp4';
import gifLetterV from './assets/images/V-compressed.mp4';
import gifLetterW from './assets/images/W-compressed.mp4';
import gifLetterX from './assets/images/X-compressed.mp4';
import gifLetterY from './assets/images/Y-compressed.mp4';
import gifLetterZ from './assets/images/Z-compressed.mp4';


function LetterChanger(props) {
    const {voca, vocas, index, width, height, size} = props || {};

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

    const srcImg = (voca) => {
        switch (voca) {
            case 'a':
            case 'A':
                return gifLetterA;
            case 'b':
            case 'B':
                return gifLetterB;
            case 'c':
            case 'C':
                return gifLetterC;
            case 'd':
            case 'D':
                return gifLetterD;
            case 'e':
            case 'E':
                return gifLetterE;
            case 'f':
            case 'F':
                return gifLetterF;
            case 'g':
            case 'G':
                return gifLetterG;
            case 'h':
            case 'H':
                return gifLetterH;
            case 'i':
            case 'I':
                return gifLetterI;
            case 'j':
            case 'J':
                return gifLetterJ;
            case 'k':
            case 'K':
                return gifLetterK;
            case 'l':
            case 'L':
                return gifLetterL;
            case 'm':
            case 'M':
                return gifLetterM;
            case 'n':
            case 'N':
                return gifLetterN;
            case 'o':
            case 'O':
                return gifLetterO;
            case 'p':
            case 'P':
                return gifLetterP;
            case 'q':
            case 'Q':
                return gifLetterQ;
            case 'r':
            case 'R':
                return gifLetterR;
            case 's':
            case 'S':
                return gifLetterS;
            case 't':
            case 'T':
                return gifLetterT;
            case 'u':
            case 'U':
                return gifLetterU;
            case 'v':
            case 'V':
                return gifLetterV;
            case 'w':
            case 'W':
                return gifLetterW;
            case 'x':
            case 'X':
                return gifLetterX;
            case 'y':
            case 'Y':
                return gifLetterY;
            case 'z':
            case 'Z':
                return gifLetterZ;
            case '\n':
                return '\n';
            default:
                return '';
        }
    }

    const changed = useMemo(() => srcImg(voca), [voca]);
    const smallSize = useMemo(()=> voca === 'l' || voca === 'L' || voca === 'I' || voca === 'i' || voca === 'T' || voca === 't', [voca]);

    const getSize = useMemo(()=> {
        var sum = 0;
        const tmp = vocas.slice(0, index).split('');
        tmp.forEach(element => {
            if ((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')) {
                if (element === 'l' || element === 'L' || element === 'I' || element === 'i' || element === 'T' || element === 't') {
                    if (sum + size + width - 20 > 1236){
                        sum = (size + width - 20);
                    } else {
                        sum += (size + width - 20);
                    }
                } else {
                    if (sum + (size + width) > 1236){
                        sum = (size + width);
                    } else {
                        sum += (size + width);
                    }
                }
            } else if (element === ' '){
                if (sum + (size/2 + width) > 1236) {
                    sum = (size/2 + width);
                } else {
                    sum += (size/2 + width);
                }
            } else if (element === '\n') {
                sum = 0;
            }
        })
        const lineLength = sum % 1236;
        return (1236 - lineLength - width);
    },[voca, vocas, size, width, index]);

    return (
        <div style={{marginRight: width, marginBottom: height + 5}}>
            {
                changed === '' ?
                <div style={{width: size/2, height: size}} />
                :
                changed === '\n' ?
                <div style={{width: getSize, height: size}} />
                :
                <video className='video' style={{width: smallSize? (size - 20) : size, height: size}} autoPlay loop>
                    <source src={srcImg(voca)} type="video/mp4"/>
                </video>
            }
        </div>
    );
}

export default LetterChanger;
