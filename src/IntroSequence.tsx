import React from 'react';
import Disclaimer from './Disclaimer';

interface setMostrarIntroSequenceProp {
    setMostrarIntroSequence: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroSequence: React.FC<setMostrarIntroSequenceProp> = ({setMostrarIntroSequence}) => {
        
    return (
    
        <div>

            <div>
                <Disclaimer setMostrarIntroSequence={setMostrarIntroSequence} />
            </div>

        </div>
    );
};

export default IntroSequence;