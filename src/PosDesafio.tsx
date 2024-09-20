import React, { useState, useEffect } from 'react';

const PosDesafio: React.FC = () => {

    const [mostrarPosJogo, setMostrarPosJogo] = useState <boolean> (false)

    useEffect(() => {
        console.log('o componente de pos desafio foi montado')
    }, [])
        
    return (
    
        <div className='z-50 relative w-full h-screen bg-black/50 grid place-items-center '>
            <div className='bg-amber-400 p-24 rounded-sm border border-gray-800 border-1 flex flex-col justify-center items-center gap-8'>
                <p className='fonte-headline text-amber-600 text-5xl contorno-de-texto-menor text-center'>Desafio Concluído</p>

                <p className='fonte-headline text-amber-400 text-xl contorno-de-texto-menor text-center'>Tempo Final:</p>

                <button className='text-black fonte-papyrus bg-amber-600 hover:bg-amber-800 p-4 rounded-lg font-bold text-center'>Finalizar</button>
            </div>
        </div>
    
    );
};

export default PosDesafio;