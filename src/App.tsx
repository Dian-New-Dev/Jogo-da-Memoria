import React, { useState } from 'react';
import IntroSequence from './IntroSequence';
import Menu from './Menu';
import GameLogic from './GameLogic';
import Cena1 from './Cena1';

const App: React.FC = () => {

    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (false)
    const [comecarCena1, setComecarCena1] = useState <boolean> (true)
    const [faseAtual, setFaseAtual] = useState <number> (0)
    
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>
            <div id='intro' className={`text-white absolute top-0 left-0 w-full h-screen ${mostrarIntroSequence ? 'visible' : 'hidden'} `}>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${mostrarIntroSequence ? 'hidden' : 'visible'} `}>
                {!mostrarIntroSequence && !comecarCena1 && <Menu setComecarCena1={setComecarCena1} />}
            </div>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${comecarCena1 ? 'visible' : 'hidden'} `}>
                {comecarCena1 && <Cena1 setComecarCena1={setComecarCena1} />}
            </div>

            <div className={`z-50 absolute top-0 left-0 w-full h-screen text-white ${faseAtual !== 0 ? 'visible' : 'hidden'} `}>
                {faseAtual !== 0 && <GameLogic />}
            </div>
        </div>
    );
};

export default App;