import React, { useState, useEffect, useRef } from 'react';
import IntroSequence from './IntroSequence';
import Menu from './Menu';
import GameLogic from './GameLogic';
import Cena1 from './Cena1';



const App: React.FC = () => {

    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (false)
    const [comecarCena1, setComecarCena1] = useState <boolean> (false)
    const [faseAtual, setFaseAtual] = useState <number> (1)


    //musica cena1
    const ventoRef = useRef(null);
    
    const tocarVento = () => {
        if (comecarCena1) {
            ventoRef.current.play();
        }
    }
    
    useEffect (() => { 
        if (comecarCena1) {
            tocarVento();
        } else {
            ventoRef.current.pause();
        }
    }, [comecarCena1])
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>
            <div id='intro' className={`text-white absolute top-0 left-0 w-full h-screen ${mostrarIntroSequence ? 'visible' : 'hidden'} `}>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${mostrarIntroSequence ? 'hidden' : 'visible'} `}>
                {!mostrarIntroSequence && !comecarCena1 && <Menu setComecarCena1={setComecarCena1} />}
            </div>

            <audio ref={ventoRef} src={"./assets/audio/music/menu.mp3"} onEnded={tocarVento}></audio>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${comecarCena1 ? 'visible' : 'hidden'} `}>
                {comecarCena1 && <Cena1 setComecarCena1={setComecarCena1} setFaseAtual={setFaseAtual} />}
            </div>

            <div className={`z-50 absolute top-0 left-0 w-full h-screen text-white ${faseAtual !== 0 ? 'visible' : 'hidden'} `}>
                {faseAtual !== 0 && <GameLogic faseAtual={faseAtual} />}
            </div>
        </div>
    );
};

export default App;