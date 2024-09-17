import React, { useState } from 'react';
// import GameLogic from './GameLogic';
import IntroSequence from './IntroSequence';
import Menu from './Menu';

const App: React.FC = () => {

    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (false)
    
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>
            <div id='intro' className={`text-white absolute top-0 left-0 w-full h-screen ${mostrarIntroSequence ? 'z-50' : 'z-0'} `}>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${mostrarIntroSequence ? 'z-0' : 'z-40'} `}>
                {!mostrarIntroSequence && <Menu />}
            </div>
        </div>
    
        

        //     <div>
    //         <GameLogic />
    //     </div>

    );
};

export default App;