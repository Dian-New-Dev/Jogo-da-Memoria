import React, { useState, useEffect} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';

const cartas: string[] = [
    './assets/images/prototype/advisor.png',
    './assets/images/prototype/fortune-teller.png'
]

const Prototype3: React.FC = () => {
    //states
    const [sumirMenu, setSumirMenu] = useState<boolean> (false)
    const [cartasEmbaralhadas, setCartasEmbaralhadas] = useState<string[]> ([])
    const [numeroDeCartas, setNumeroDeCartas] = useState <number | null> (null);

    //embaralhar e passar prop de cartas
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


    //botao iniciar
    function iniciarJogo() {
        setSumirMenu(true)
    }


    return (
        <div>
            <div className={`relative ${sumirMenu ? 'hidden' : 'visible'} `}>
                <button onClick={iniciarJogo}>Iniciar Jogo</button>
            </div>

            <div className={`relative ${sumirMenu ? 'visible' : 'hidden'}`}>
                <div className='z-10 absolute w-full top-0'>
                    <CartasReais cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
                    

                <div className='z-20 absolute w-full top-0'>
                    <CartasAnom numeroDeCartas={numeroDeCartas} cartasEmbaralhadas={cartasEmbaralhadas} />
                </div>
            </div>
        </div>

    );
};

export default Prototype3;