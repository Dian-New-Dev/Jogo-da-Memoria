import React, { useEffect, useState } from 'react';

interface cartasReaisProps {
    cartasEmbaralhadas: string[];
    display: string;
    gap: string; 
    gridRows: string;
    gridCols: string;
    width: string;
}

const CartasReais: React.FC<cartasReaisProps> = ({cartasEmbaralhadas, display, gap, gridRows, gridCols, width}) => {

    const [listaDeCartas, setListaDeCartas] = useState <JSX.Element[]> ([])

    useEffect(() => {
        
        const cartasRenderizadas = cartasEmbaralhadas.map((item, index) => (
            <div key={index} className={`relative`}>
                <img onClick={() => processarCliqueNasCartas(item, index)} className='cartasClicaveis' src={item} alt="Carta" />
            </div>
        ));
        setListaDeCartas(cartasRenderizadas)
        
    }, [cartasEmbaralhadas]);

    function processarCliqueNasCartas(src:string, index:number) {
        verificarSeCartasSaoIguais(src);
    }

    let clickCounter:number = 0;
    let primeiroSrc:string = '';
    let segundoSrc: string = '';

    function verificarSeCartasSaoIguais(src:string) {
        clickCounter = clickCounter + 1;
        if (clickCounter == 2) {
            segundoSrc = src;
            if (primeiroSrc === segundoSrc) {
                console.log('ambas imagens são a mesma')
            } else {
                console.log('imagens diferentes')
            }
            clickCounter = 0;
        } else {
            primeiroSrc = src;
        }

    }

    ////////

    return (
        <div className=' p-4 bg-amber-300 grid gap-2 grid-rows-2 grid-cols-2 w-[500px] m-auto'>
            {listaDeCartas}
        </div>

    );
};

export default CartasReais;