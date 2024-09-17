import React, { useState, useEffect} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';

const cartas: string[] = [
    './assets/images/prototype/advisor.png',
    './assets/images/prototype/fortune-teller.png'
]

const GameLogic: React.FC = () => {
    //states
    const [jogadorPreparado, setJogadorPreparado] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);

    // duplicar e embaralhar cartas + registrar numero de cartas no jogo
    // ambos serão passados como props
    useEffect(() => {
        const cartasDuplicado = [...cartas, ...cartas];
        embaralharCartas(cartasDuplicado)
        setNumeroDeCartas(cartasDuplicado.length)

        function embaralharCartas(cartasDuplicado: string[]) {
            const embaralhandoCartas = cartasDuplicado.sort(() => Math.random() - 0.5) 
            setCartasEmbaralhadas(embaralhandoCartas)
        }

    }, []);

    //criar prop de estilização única para ambos componentes children


    // Se botao Iniciar for clicado, faz o Menu sumir e o painel de jogo aparecer
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