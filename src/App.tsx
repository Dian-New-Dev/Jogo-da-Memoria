import React, { useState } from 'react';
// import GameLogic from './GameLogic';
import IntroSequence from './IntroSequence';
import Menu from './Menu';

const App: React.FC = () => {

    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (true)
    
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>
            <div id='intro' className='z-50 text-white absolute top-0 left-0 w-full h-screen'>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div className='z-40 absolute top-0 left-0 w-full h-screen'>
                {!mostrarIntroSequence && <Menu />}
            </div>
        </div>
    
        

        //     <div>
    //         <GameLogic />
    //     </div>

    );
};

export default App;