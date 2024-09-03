import React from 'react';
import Presents from './Presents';
import Intro from './Intro';
import Intro2 from './Intro2';
import Disclaimer from './Disclaimer';

const IntroSequence: React.FC = () => {
        
    return (
    
        <div>

            <div>
                <Disclaimer />
            </div>

            {/* <div>
                <Presents />
            </div>

            <div>
                <Intro />
            </div>

            <div>
                <Intro2 />
            </div> */}

        </div>
    );
};

export default IntroSequence;