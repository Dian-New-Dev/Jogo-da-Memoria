import React, { useEffect, useRef } from 'react';

interface PosDesafioProps {
    tempoFinalDoDesafio: string;
    setFaseAtual:React.Dispatch<React.SetStateAction<number>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
    setRenderizarDescricaoDasCartas: React.Dispatch<React.SetStateAction<boolean>>;
}

const PosDesafio: React.FC <PosDesafioProps> = ({tempoFinalDoDesafio, setFaseAtual, setRenderizarGameLogic, setRenderizarDescricaoDasCartas}) => {

    const audioVitoriaRef = useRef<HTMLAudioElement | null>(null);

    const playVitoriaAudio = () => {
        audioVitoriaRef.current?.play();
    }

    //esse aqui roda na inicialização do componente
    useEffect(() => {
        playVitoriaAudio();
    }, [])

    function terminarPartida() {
        console.log('terminou partida')
        setFaseAtual(prev => prev + 1)
        setRenderizarGameLogic(false)
        setRenderizarDescricaoDasCartas(true)
    }
        
    return (
    
        <div className='z-50 relative w-full h-screen bg-black/50 grid place-items-center '>
            <div className='bg-amber-400 p-24 rounded-sm border border-gray-800 border-1 flex flex-col justify-center items-center gap-8'>
                <p className='fonte-headline text-amber-600 text-5xl contorno-de-texto-menor text-center'>Desafio Concluído</p>
                <div>
                    <p className='fonte-headline text-amber-500 text-3xl contorno-de-texto-menor text-center'>Tempo Final:</p>
                    <p className='fonte-headline text-green-500 text-2xl contorno-de-texto-menor text-center'>
                        {tempoFinalDoDesafio}
                    </p>   
                </div>


                <button onClick={terminarPartida} className='text-black fonte-papyrus bg-amber-600 hover:bg-amber-800 p-4 rounded-lg font-bold text-center'>Finalizar</button>
            </div>

            <audio ref={audioVitoriaRef} src={"./assets/audio/sfx/vitoria.mp3"}></audio>
        </div>
    
    );
};

export default PosDesafio;