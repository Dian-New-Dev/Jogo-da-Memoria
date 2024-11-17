import React, { useState, useEffect, useRef} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';
import ArmazemDeCartas from '../data/ArmazemDeCartas';
import PosDesafio from './PosDesafio';
import Cronometro from './Cronometro';

import cartasAnomImg from '../assets/images/cartas/anom.jpg';

import fase1Music from '../assets/audio/music/fase1.mp3';
import hoverAudio from '../assets/audio/sfx/hover.mp3';

interface GameLogicProps {
    faseAtual: number;
    setFaseAtual: React.Dispatch<React.SetStateAction<number>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
    setRenderizarDescricaoDasCartas: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexA: React.Dispatch<React.SetStateAction<number>>;
    setIndexB: React.Dispatch<React.SetStateAction<number>>;
}

const cartasArrayOriginal: string[] = ArmazemDeCartas;

const GameLogic: React.FC <GameLogicProps> = ({faseAtual, setFaseAtual, setRenderizarGameLogic, setRenderizarDescricaoDasCartas, setIndexA, setIndexB}) => {

    useEffect(() => {
        if (faseAtual === 1) {
            setFase1(true)
        } else {
            setFase1(false)
        }
    }, [faseAtual])
    
    const [fase1, setFase1] = useState <boolean> (false);

    //states
    
    const [jogadorPreparado, setJogadorPreparado] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);
    const [venceuDesafioAtual, setVenceuDesafioAtual] = useState <boolean> (false);
    const [contagem321, setContagem321] = useState <string> ('!')
    const [mostrarContagem321, setMostrarContagem321] = useState <boolean> (false)
    const [tempoFinalDoDesafio, setTempoFinalDoDesafio] = useState <string> ('');

    //variaveis para estilizacao conjunta de CartasReais e CartasAnom
        const srcAnom: string = (cartasAnomImg)
        const estilosDasFases: string[] = [
            "absolute w-full h-screen top-0 grid place-items-center", //esse primeiro é diferente
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[500px] mapa-grid-fase1",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[50%] mapa-grid-fase2",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[30%] mapa-grid-fase3",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[40%] mapa-grid-fase4",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[40%] mapa-grid-fase5",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[50%] mapa-grid-fase6",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[40%] mapa-grid-fase7",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[40%] mapa-grid-fase8",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[40%] mapa-grid-fase9",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[60%] mt-8 mapa-grid-fase10",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[60%] mapa-grid-fase11",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[70%] mapa-grid-fase12",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[70%] mapa-grid-fase13",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[70%] mapa-grid-fase14",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[70%] mapa-grid-fase15",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[80%] mapa-grid-fase16",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[45%] mapa-grid-fase17",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[80%] mapa-grid-fase18",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[60%] mapa-grid-fase19",
            "relative overflow-hidden border-8 border-red-600 rounded-xl grid w-[70%] mapa-grid-fase20",
        ];

        const estiloDasDivsDasCartas: string = 'border-4 border-amber-800 relative'
        


    // duplicar e embaralhar cartas + registrar numero de cartas no jogo
    // ambos são passados como props
    useEffect(() => {
        const cartas = [...Array(faseAtual + 1)].map((_, i) => cartasArrayOriginal[i]);

        const cartasDuplicado = [...cartas, ...cartas];
        embaralharCartas(cartasDuplicado)
        setNumeroDeCartas(cartasDuplicado.length)

        function embaralharCartas(cartasDuplicado: string[]) {
            const embaralhandoCartas = cartasDuplicado.sort(() => Math.random() - 0.5) 
            setCartasEmbaralhadas(embaralhandoCartas)
        }

    }, [faseAtual]);

    //musica gameplay
    const gameplayMusic1 = useRef<HTMLAudioElement | null>(null);

    const gameplayMusic1Play = () => {
        gameplayMusic1.current?.play();
    }

    
    // Se botao "Preparado" for clicado, ativa um timer de 3 segundos
    // e inicia o jogo
    function iniciarJogo() {
        gameplayMusic1Play() //passar para o topo da função na versão final

        setMostrarContagem321(true)
        setContagem321('3');
        setTimeout(() => {
            setContagem321('2');
            setTimeout(() => {
                setContagem321('1');
                setTimeout(() => {
                    setJogadorPreparado(true);
                }, 1000);
            }, 1000);
        }, 1000);
        //setJogadorPreparado(true) // apenas para debug, pula a contagem
    }

    //audio
    const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

    const playhoverSound = () => {
        hoverAudioRef.current?.play();
    }

    //logica para determinar os indexes para o Componente DescricaoDasCartas

    const effectRan = useRef(false);
    useEffect(() => {
        if (faseAtual === 1) {
            if (effectRan.current || process.env.NODE_ENV !== "development") {
                console.log('foi chamado o useEffect dos indexes no remount')
                setIndexA(prev => prev + 2)
                setIndexB(prev => prev + 2)
            }
        } else {
            if (effectRan.current || process.env.NODE_ENV !== "development") {
                console.log('foi chamado o useEffect dos indexes no remount')
                setIndexB(prev => prev + 1)

            }
        }

        return () => {
            effectRan.current = true;
        } 
    }, []); 


    return (

        <div className='w-[95%] mx-auto h-screen background-pulpito'>
            <audio ref={gameplayMusic1} src={fase1Music} onEnded={gameplayMusic1Play}></audio>

            <div className={`fonte-headline relative w-full h-screen flex flex-col justify-center items-center gap-8 ${jogadorPreparado ? 'hidden' : 'visible'} `}>
                <p className='text-[64px] contorno-de-texto text-outline underline text-red-700 font-bold'>Desafio {faseAtual}</p>
                <p className='fonte-papyrus text-5xl text-amber-600 contorno-de-texto'>
                    {fase1 ? "Duas novas cartas surgem sobre o livro." : "Um novo par de cartas surge sobre o livro."} 
                </p>
                <button onMouseEnter={playhoverSound} onClick={iniciarJogo} className='text-3xl contorno-de-texto w-32 mx-auto m-2 p-2 bg-amber-600/75 hover:bg-amber-700 rounded-sm border border-black'>Preparado?</button>
                <p className={`fonte-papyrus text-5xl text-red-700 opacity-0 contorno-de-texto font-bold ${mostrarContagem321 ? 'opacity-100' : ''} `}>
                    {contagem321}
                </p>

            </div>

            <div className={`relative ${jogadorPreparado ? 'visible' : 'hidden'}`}>

                <div className='z-0 absolute w-full h-screen top-0 grid place-items-center'>
                    <Cronometro jogadorPreparado={jogadorPreparado} venceuDesafioAtual={venceuDesafioAtual} setTempoFinalDoDesafio={setTempoFinalDoDesafio} />
                </div>

                <div className={`z-20 ${estilosDasFases[0]} `}>
                    <CartasReais faseAtual={faseAtual} estiloDasDivsDasCartas={estiloDasDivsDasCartas} cartasEmbaralhadas={cartasEmbaralhadas} estilosDasFases={estilosDasFases} />
                </div>
                    

                <div className={`z-30 ${estilosDasFases[0]} `}>
                    <CartasAnom faseAtual={faseAtual} estiloDasDivsDasCartas={estiloDasDivsDasCartas} numeroDeCartas={numeroDeCartas} cartasEmbaralhadas={cartasEmbaralhadas} setVenceuDesafioAtual={setVenceuDesafioAtual} srcAnom={srcAnom} estilosDasFases={estilosDasFases} />
                </div>
            
                {venceuDesafioAtual && <PosDesafio tempoFinalDoDesafio={tempoFinalDoDesafio} setFaseAtual={setFaseAtual} setRenderizarGameLogic={setRenderizarGameLogic} setRenderizarDescricaoDasCartas={setRenderizarDescricaoDasCartas} />}
            </div>
            <audio ref={hoverAudioRef} src={hoverAudio}></audio>
        </div>

    );
};

export default GameLogic;