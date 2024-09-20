import React, { useState, useEffect, useRef} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';
import ArmazemDeCartas from './data/ArmazemDeCartas';
import PosDesafio from './PosDesafio';
import Cronometro from './Cronometro';

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

    //states
    const [jogadorPreparado, setJogadorPreparado] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);
    const [venceuDesafioAtual, setVenceuDesafioAtual] = useState <boolean> (false);
    const [contagem321, setContagem321] = useState <string> ('!')
    const [mostrarContagem321, setMostrarContagem321] = useState <boolean> (false)
    const [tempoFinalDoDesafio, setTempoFinalDoDesafio] = useState <string> ('');


    // duplicar e embaralhar cartas + registrar numero de cartas no jogo
    // ambos serão passados como props
    useEffect(() => {
        const cartas = [...Array(2)].map((_, i) => cartasArrayOriginal[i]);
        //a linha anterior equivale a

        // const cartas = [];
        // for (let i = 0; i < 2; i++) {
        //     cartas.push(cartasArrayOriginal[i])
        // }

        //mas o método for/push não é recomendando em react

        const cartasDuplicado = [...cartas, ...cartas];
        embaralharCartas(cartasDuplicado)
        setNumeroDeCartas(cartasDuplicado.length)

        function embaralharCartas(cartasDuplicado: string[]) {
            const embaralhandoCartas = cartasDuplicado.sort(() => Math.random() - 0.5) 
            setCartasEmbaralhadas(embaralhandoCartas)
        }

    }, []);

    
    // Se botao "Preparado" for clicado, ativa um timer de 3 segundos
    // e inicia o jogo
    function iniciarJogo() {
        setMostrarContagem321(true)
        setContagem321('3');
        console.log('3');
        setTimeout(() => {
            setContagem321('2');
            console.log('2');
            setTimeout(() => {
                setContagem321('1');
                console.log('1');
                setTimeout(() => {
                    setJogadorPreparado(true);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    //logica para determinar os indexes para o Componente DescricaoDasCartas

    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current || process.env.NODE_ENV !== "development") {
            console.log('foi chamado o useEffect dos indexes no remount')
            setIndexA(prev => prev + 2)
            setIndexB(prev => prev + 2)
        }

        return () => {
            effectRan.current = true;
        } 
    }, []);


    return (

        <div className='w-[95%] mx-auto h-screen background-pulpito'>
            <div className={`fonte-headline relative w-full h-screen flex flex-col justify-center items-center gap-8 ${jogadorPreparado ? 'hidden' : 'visible'} `}>
                <p className='text-[64px] contorno-de-texto text-outline underline text-red-700 font-bold'>Desafio {faseAtual}</p>
                <p className='fonte-papyrus text-5xl text-amber-600 contorno-de-texto'>Duas novas cartas surgem sobre o livro!!</p>
                <button onClick={iniciarJogo} className='text-3xl contorno-de-texto w-32 mx-auto m-2 p-2 bg-amber-600/75 hover:bg-amber-700 rounded-sm border border-black'>Preparado?</button>
                <p className={`fonte-papyrus text-5xl text-red-700 opacity-0 contorno-de-texto font-bold ${mostrarContagem321 ? 'opacity-100' : ''} `}>
                    {contagem321}
                </p>

            </div>

            <div className={`relative ${jogadorPreparado ? 'visible' : 'hidden'}`}>

                <div className='z-0 absolute w-full h-screen top-0 grid place-items-center'>
                    <Cronometro jogadorPreparado={jogadorPreparado} venceuDesafioAtual={venceuDesafioAtual} setTempoFinalDoDesafio={setTempoFinalDoDesafio} />
                </div>

                <div className='z-10 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasReais cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
                    

                <div className='z-20 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasAnom numeroDeCartas={numeroDeCartas} cartasEmbaralhadas={cartasEmbaralhadas} setVenceuDesafioAtual={setVenceuDesafioAtual} />
                </div>
            
                {venceuDesafioAtual && <PosDesafio tempoFinalDoDesafio={tempoFinalDoDesafio} setFaseAtual={setFaseAtual} setRenderizarGameLogic={setRenderizarGameLogic} setRenderizarDescricaoDasCartas={setRenderizarDescricaoDasCartas} />}
            </div>
        </div>

    );
};

export default GameLogic;