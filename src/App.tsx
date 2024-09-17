import React, { useState } from 'react';
// import GameLogic from './GameLogic';
import IntroSequence from './IntroSequence';
import Menu from './Menu';
import GameLogic from './GameLogic';

const App: React.FC = () => {

    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (true)
    const [comecarJogo, setComecarJogo] = useState <boolean> (false)
    
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>
            <div id='intro' className={`text-white absolute top-0 left-0 w-full h-screen ${mostrarIntroSequence ? 'visible' : 'hidden'} `}>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${mostrarIntroSequence ? 'hidden' : 'visible'} `}>
                {!mostrarIntroSequence && !comecarJogo && <Menu setComecarJogo={setComecarJogo} />}
            </div>

            <div className={`z-50 absolute top-0 left-0 w-full h-screen text-white ${comecarJogo ? 'visible' : 'hidden'} `}>
                {comecarJogo && <GameLogic />}
            </div>
        </div>
    
        

        //     <div>
    //         <GameLogic />
    //     </div>

    );
};

export default App;