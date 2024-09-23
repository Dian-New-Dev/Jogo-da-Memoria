import React, { useEffect, useState } from 'react';

interface cartasReaisProps {
    faseAtual: number;
    estiloDasDivsDasCartas: string;
    cartasEmbaralhadas: string[];
    estilosDasFases: string[];
}

const CartasReais: React.FC<cartasReaisProps> = ({faseAtual, estiloDasDivsDasCartas, cartasEmbaralhadas, estilosDasFases}) => {

    const [listaDeCartas, setListaDeCartas] = useState <JSX.Element[]> ([])

    useEffect(() => {
        
        const cartasRenderizadas = cartasEmbaralhadas.map((item, index) => (
            <div key={index} className={`${estiloDasDivsDasCartas} ${index+1}`}>
                <img className={`cartasClicaveis`} onClick={() => processarCliqueNasCartas(item, index)} src={item} alt="Carta" />
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
        <div className={estilosDasFases[faseAtual]}>
            {listaDeCartas}
        </div>

    );
};

export default CartasReais;

{/* <div className='p-4 grid gap-2 grid-rows-3 grid-cols-3 w-[500px] m-auto'>
{listaDeCartas}
</div> */}