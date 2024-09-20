import React from 'react';
import cartasOriginal from './data/ArmazemDeCartas';

const cartasArrayOriginal: string[] = cartasOriginal;

const cartas = [...Array(2)].map((_, i) => cartasArrayOriginal[i]);

const DescricaoDasCartas: React.FC = () => {
        
    return (
    
        <div className='w-full h-screen flex flex-col items-center p-12 gap-8'>
            <div className='text-center flex flex-col gap-2 fonte-headline text-2xl'>
                <p>O alívio da vitória lhe clareia a mente.</p>
                <p>As cartas no livro vão ficando familiares...</p>
            </div>
           
           <div className='flex items-center justify-center'>
                <div className='p-2 flex justify-center'>
                    <img className='w-[60%]' src={cartas[0]} alt="Carta1" />
                </div>

                <div className='p-2 flex justify-center'>
                    <img className='w-[60%]' src={cartas[1]} alt="Carta2" />
                </div>
           </div>

            <button className='z-50 text-white fonte-papyrus bg-amber-600 p-4 rounded-lg font-bold pointer-events-auto'>Avançar</button>
        </div>
    
    );
};

export default DescricaoDasCartas;