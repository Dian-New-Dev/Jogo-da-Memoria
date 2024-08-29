import React, { useState, useEffect} from 'react';
import CartasReais from './CartasReais';
import CartasAnom from './CartasAnom';

const cartas: object[] = [
    {
        srcAnonimo: './assets/images/prototype/anom.jpg',
        srcId: './assets/images/prototype/advisor.png'    
    },
    {
        srcAnonimo: './assets/images/prototype/anom.jpg',
        srcId: './assets/images/prototype/fortune-teller.png'   
    }
        
];

const Prototype3: React.FC = () => {

    // useEffect(() => {
    //     const cartasDuplicado = [...cartas, ...cartas];
    //     embaralharCartas(cartasDuplicado)

    //     function embaralharCartas(cartasDuplicado: object[]) {
    //         const cartasEmbaralhadas = cartasDuplicado.sort(() => Math.random() - 0.5)
    //     }

    // }, []);

    const [sumirMenu, setSumirMenu] = useState(false)

    function iniciarJogo() {
        setSumirMenu(true)
    }


    return (
        <div>
            <div className={`relative ${sumirMenu ? 'hidden' : 'visible'} `}>
                <button onClick={iniciarJogo}>Iniciar Jogo</button>
            </div>

            <div className={`relative ${sumirMenu ? 'visible' : 'hidden'}`}>
                <div>
                    <CartasReais />
                </div>
                    

                <div>
                    <CartasAnom />
                </div>
            </div>
        </div>

    );
};

export default Prototype3;