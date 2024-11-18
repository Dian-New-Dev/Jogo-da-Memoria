import React, { useState, useRef } from 'react';

import clickPlayAudio from '../assets/audio/sfx/click-play.mp3'
import hoverAudio from '../assets/audio/sfx/hover.mp3'



interface setComecarCena1Prop {
    setComecarCena1: React.Dispatch<React.SetStateAction<boolean>>;
    language: number;
}


const Menu: React.FC<setComecarCena1Prop> = ({setComecarCena1, language}) => {

    const [fadeOut, setFadeOut] = useState <boolean> (false);
    
    const clickPlaySoundRef = useRef<HTMLAudioElement | null>(null);
    const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

    const playhoverSound = () => {
        hoverAudioRef.current?.play();
    }

    const playClickSound = () => {
        clickPlaySoundRef.current?.play();
    }
      
    function clicouEmComecarJogo() {
        playClickSound();
        setFadeOut(true)

        setTimeout(function () {
            setComecarCena1(true)
        }, 3000)

    }



    return (
    <div id='menu-container' className={`w-full h-screen flex flex-col items-center justify-evenly gap-16 background-menu transicao-opacidade ${fadeOut ? 'transicao-out' : 'transicao-in'} `}>
        <div className='text-amber-400 fonte-headline text-[250px] m-0'>
            <h1 className='fonte-headline'>
                <>
                {language === 0 ?
                'O Vigésimo'
                :
                'The Twentieth'
                }
                </>
            </h1>
        </div>

        <div className='fonte-papyrus text-amber-200 text-lg font-bold'>
            <>
            {language === 0 ?
                <ul className='flex flex-col gap-4 text-center'>
                    <li onMouseEnter={playhoverSound} onClick={clicouEmComecarJogo} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>Novo Jogo</li>
                    <li onMouseEnter={playhoverSound} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>Carregar Jogo</li>
                    <li onMouseEnter={playhoverSound} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>Opções</li>
                </ul>
                :
                <ul className='flex flex-col gap-4 text-center'>
                    <li onMouseEnter={playhoverSound} onClick={clicouEmComecarJogo} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>New Game</li>
                    <li onMouseEnter={playhoverSound} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>Load Game</li>
                    <li onMouseEnter={playhoverSound} className='cursor-pointer hover:scale-125 hover:text-amber-600 hover:underline'>Options</li>
                </ul>
        
            }
            </>
        </div>

        <div className=''>
            2024 - DA Web Dev.
        </div>

        <audio ref={clickPlaySoundRef} src={clickPlayAudio}></audio>
        <audio ref={hoverAudioRef} src={hoverAudio}></audio>
    </div>
    );
};

export default Menu;