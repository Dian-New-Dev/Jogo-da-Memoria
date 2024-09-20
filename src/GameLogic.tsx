import React, { useState, useEffect} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';
import ArmazemDeCartas from './data/ArmazemDeCartas';
import PosDesafio from './PosDesafio';

interface GameLogicProps {
    faseAtual: number;
}

const cartasArrayOriginal: string[] = ArmazemDeCartas;

const GameLogic: React.FC <GameLogicProps> = ({faseAtual}) => {
    console.log('começando gameLogic com a fase numero ' + faseAtual)


    //states
    const [jogadorPreparado, setJogadorPreparado] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);
    const [venceuDesafioAtual, setVenceuDesafioAtual] = useState <boolean> (false);

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
        setJogadorPreparado(true)
    }


    return (

        <div className='w-[95%] mx-auto h-screen background-pulpito'>
            <div className={`fonte-headline relative w-full h-screen flex flex-col justify-center items-center gap-8 ${jogadorPreparado ? 'hidden' : 'visible'} `}>
                <p className='text-[64px] contorno-de-texto text-outline underline text-red-700 font-bold'>Desafio {faseAtual}</p>
                <p className='fonte-papyrus text-5xl text-amber-600 contorno-de-texto'>Duas novas cartas surgem sobre o livro!!</p>
                <button onClick={iniciarJogo} className='text-3xl contorno-de-texto w-32 mx-auto m-2 p-2 bg-amber-600/75 hover:bg-amber-700 rounded-sm border border-black'>Preparado?</button>
            </div>

            <div className={`relative ${jogadorPreparado ? 'visible' : 'hidden'}`}>
                                
                <div className='z-10 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasReais cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
                    

                <div className='z-20 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasAnom numeroDeCartas={numeroDeCartas} cartasEmbaralhadas={cartasEmbaralhadas} setVenceuDesafioAtual={setVenceuDesafioAtual} />
                </div>
            
                {venceuDesafioAtual && <PosDesafio />}
            </div>
        </div>

    );
};

export default GameLogic;