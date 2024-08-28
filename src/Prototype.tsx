import React, { useState, useEffect } from 'react';

const Prototype: React.FC = () => {
    const cartas: string[] = [
        './assets/images/prototype/advisor.png',
        './assets/images/prototype/fortune-teller.png'        
    ];

    const [listaDeCartas, setListaDeCartas] = useState<JSX.Element[]>([]);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);


    useEffect(() => {
        dobrarArray();
    }, []);

    function dobrarArray() {

            const cartasDuplicado = [...cartas, ...cartas];
            embaralharCartas(cartasDuplicado);  


    };

    function embaralharCartas(cartasDuplicado: string[]) {
        const cartasEmbaralhadas = cartasDuplicado.sort(() => Math.random() - 0.5)
        inserirCartasNoPainel(cartasEmbaralhadas)
    }

    function inserirCartasNoPainel(cartasEmbaralhadas: string[]) {
        const cartasRenderizadas = cartasEmbaralhadas.map((item, index) => (
            <div key={index} className={`z-10 ${clickedIndex === index ? 'z-30' : 'z-10'}`}>
                <img onClick={() => processarCliqueNasCartas(item, index)} className='cartasClicaveis' src={item} alt="Carta" />
            </div>
        ));
        setListaDeCartas(cartasRenderizadas)
    }

    let clickCounter:number = 0;
    let primeiroSrc:string = '';
    let segundoSrc: string = '';

    function processarCliqueNasCartas(src:string, index:number) {
        verificarSeCartasSaoIguais(src);
        animClique(index);
    }

    function verificarSeCartasSaoIguais(src:string) {
        clickCounter = clickCounter + 1;
        if (clickCounter == 2) {
            segundoSrc = src;
            if (primeiroSrc === segundoSrc) {
                console.log('ambas imagens são a mesma')
            }
            clickCounter = 0;
        } else {
            primeiroSrc = src;
        }

    }

    function animClique(index:number) {
        setClickedIndex(index);
    }

    return (
        <div className='mx-auto border border-gray-100 bg-gray-900 w-[800px] h-[800px]'>
            <div className='relative grid grid-cols-2 grid-rows-2'>
                {listaDeCartas}
                <div className='absolute top-0 right-0 w-full h-full pointer-events-none bg-red-500 z-20'></div>
            </div>

        </div>
    );
};

export default Prototype;