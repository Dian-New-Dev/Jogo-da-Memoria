import React, { useState, useRef } from 'react';

interface setComecarCena1Prop {
    setComecarCena1: React.Dispatch<React.SetStateAction<boolean>>;
}


const Menu: React.FC<setComecarCena1Prop> = ({setComecarCena1}) => {

    const [fadeOut, setFadeOut] = useState <boolean> (false);
    
    const clickPlaySoundRef = useRef<HTMLAudioElement | null>(null);

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
            <h1>O Vigésimo</h1>
        </div>

        <div className='fonte-papyrus text-amber-200 text-lg font-bold'>
            <ul className='flex flex-col gap-4 text-center'>
                <li onClick={clicouEmComecarJogo} className='cursor-pointer hover:scale-125'>Novo Jogo</li>
                <li className='cursor-pointer hover:scale-125'>Carregar Jogo</li>
                <li className='cursor-pointer hover:scale-125'>Opções</li>
            </ul>
        </div>

        <div className=''>
            2024 - DA Web Dev.
        </div>

        <audio ref={clickPlaySoundRef} src={"./assets/audio/sfx/click-play.mp3"}></audio>
    </div>
    );
};

export default Menu;