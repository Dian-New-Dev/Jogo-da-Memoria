import React from 'react';
import Disclaimer from './Disclaimer';

interface setMostrarIntroSequenceProp {
    setMostrarIntroSequence: React.Dispatch<React.SetStateAction<boolean>>;
    language: number;
}

const IntroSequence: React.FC<setMostrarIntroSequenceProp> = ({setMostrarIntroSequence, language}) => {
        
    return (
    
        <div>

            <div>
                <Disclaimer language={language} setMostrarIntroSequence={setMostrarIntroSequence} />
            </div>

        </div>
    );
};

export default IntroSequence;