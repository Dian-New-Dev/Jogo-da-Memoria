import React, { useEffect, useState } from 'react';
import svgCartasReaisAnim from './data/ArmazemSVGCartasReais';

const Blob: React.FC = () => {

    const [indexForma, setIndexForma] = useState <number> (0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexForma(prev => (prev + 1) % svgCartasReaisAnim.length);
            console.log('Transição acionada: ' + svgCartasReaisAnim[(indexForma + 1) % svgCartasReaisAnim.length]);
        }, 2000);

        return () => clearInterval(interval); // Limpar o intervalo ao desmontar
    }, [indexForma]);

    
    return (
        <div className='z-0 absolute bg-black glasmorfismo centralizar-absoluto top-0 left-0 w-full'>
                    <svg 
            className=''
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">                    
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1"
                    stopColor="rgba(191.57, 81.324, 10.342, 1)"
                    offset="0%">
                </stop>
                <stop id="stop2" 
                    stopColor="rgba(77.731, 8.146, 8.146, 1)" 
                    offset="100%">
                </stop>                        
                </linearGradient>                    
            </defs>                
            <path fill="url(#sw-gradient)"
                d={`${svgCartasReaisAnim[indexForma]}`}
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0" 
                className="blob-anim transition-all"
                stroke="url(#sw-gradient)">
                </path>              
        </svg>
        </div>
    )
};

export default Blob;