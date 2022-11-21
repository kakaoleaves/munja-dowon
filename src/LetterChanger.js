import React from 'react';
import gifLetterA from './assets/images/A.mp4';
import gifLetterB from './assets/images/B.mp4';
import gifLetterC from './assets/images/C.mp4';
import gifLetterD from './assets/images/D.mp4';
import gifLetterE from './assets/images/E.mp4';
import gifLetterF from './assets/images/F.mp4';
import gifLetterG from './assets/images/G.mp4';
import gifLetterH from './assets/images/H.mp4';
import gifLetterI from './assets/images/I.mp4';
import gifLetterJ from './assets/images/J.mp4';
import gifLetterK from './assets/images/K.mp4';
import gifLetterL from './assets/images/L.mp4';
import gifLetterM from './assets/images/M.mp4';
import gifLetterN from './assets/images/N.mp4';
import gifLetterO from './assets/images/O.mp4';
import gifLetterP from './assets/images/P.mp4';
import gifLetterQ from './assets/images/Q.mp4';
import gifLetterR from './assets/images/R.mp4';
import gifLetterS from './assets/images/S.mp4';
import gifLetterT from './assets/images/T.mp4';
import gifLetterU from './assets/images/U.mp4';
import gifLetterV from './assets/images/V.mp4';
import gifLetterW from './assets/images/W.mp4';
import gifLetterX from './assets/images/X.mp4';
import gifLetterY from './assets/images/Y.mp4';
import gifLetterZ from './assets/images/Z.mp4';


function LetterChanger(props) {
    const {voca, width, height, size} = props || {};

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
            default:
                return '';
        }
    }

    return (
        <div style={{marginRight: width, marginBottom: height}}>
            {
                srcImg(voca) === '' ? 
                <div style={{width: size/2, height: size}} />
                :
                <video style={{width: size, height: size}} autoPlay="autoplay" loop>
                    <source src={srcImg(voca)} type="video/mp4"/>
                </video>
            }
        </div>
    );
}

export default LetterChanger;
