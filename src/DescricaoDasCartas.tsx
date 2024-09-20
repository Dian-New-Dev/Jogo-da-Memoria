import React from 'react';
import cartasOriginal from './data/ArmazemDeCartas';
import nomeDasCartas from './data/ArmazemDeNomes';
import descricoesDasCartas from './data/ArmazemDeDescricoes';

interface DescricaoDasCartasProps {
    indexA: number;
    indexB: number;
}

// const cartasArrayOriginal: string[] = cartasOriginal;

// const cartas = [...Array(2)].map((_, i) => cartasArrayOriginal[i]);

//carta
//nome
//descricao

const DescricaoDasCartas: React.FC <DescricaoDasCartasProps> = ({ indexA, indexB }) => {


        
    return (
    
        <div className='w-full h-screen flex flex-col items-center p-12 gap-8'>
            <div className='text-center flex flex-col gap-2 fonte-headline text-2xl'>
                <p>O alívio da vitória lhe clareia a mente.</p>
                <p>As cartas no livro vão ficando familiares...</p>
            </div>
           
           <div className='flex items-center justify-center'>
                <div className='p-2 flex justify-center'>
                    <img className='w-[60%]' src={cartasOriginal[indexA]} alt="Carta1" />
                    <p>{nomeDasCartas[indexA]}</p>
                    <div>
                        <p>{descricoesDasCartas[indexA]}</p>
                    </div>
                </div>

                <div className='p-2 flex justify-center'>
                    <img className='w-[60%]' src={cartasOriginal[indexB]} alt="Carta2" />
                    <p>{nomeDasCartas[indexB]}</p>
                    <div>
                        <p>{descricoesDasCartas[indexB]}</p>
                    </div>
                </div>
           </div>

            <button className='z-50 text-white fonte-papyrus bg-amber-600 p-4 rounded-lg font-bold pointer-events-auto'>Avançar</button>
        </div>
    
    );
};

export default DescricaoDasCartas;