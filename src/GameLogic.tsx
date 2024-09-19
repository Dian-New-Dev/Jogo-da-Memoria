import React, { useState, useEffect} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';
import ArmazemDeCartas from './data/ArmazemDeCartas';


const cartasArrayOriginal: string[] = ArmazemDeCartas;

// const cartas: string[] = [
//     './assets/images/prototype/advisor.png',
//     './assets/images/prototype/fortune-teller.png'
// ]

const GameLogic: React.FC = () => {
    //states
    const [jogadorPreparado, setJogadorPreparado] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);

    // duplicar e embaralhar cartas + registrar numero de cartas no jogo
    // ambos serão passados como props
    useEffect(() => {
        const cartas = [...Array(8)].map((_, i) => cartasArrayOriginal[i]);
        console.log(cartas)
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
            <div className={`relative w-full h-screen grid place-items-center ${jogadorPreparado ? 'hidden' : 'visible'} `}>
                <button onClick={iniciarJogo} className='w-32 mx-auto m-2 p-2 bg-amber-600/75 hover:bg-amber-700 rounded-3xl'>Preparado?</button>
            </div>

            <div className={`relative ${jogadorPreparado ? 'visible' : 'hidden'}`}>
                
                <div className='z-10 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasReais cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
                    

                <div className='z-20 absolute w-full h-screen top-0 grid place-items-center'>
                    <CartasAnom numeroDeCartas={numeroDeCartas} cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
            
            </div>
        </div>

    );
};

export default GameLogic;