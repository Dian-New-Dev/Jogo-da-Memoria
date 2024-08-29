import React, { useState, useEffect } from 'react';


//declarados fora do componente funcional pois contém valores fixos não
//alteráveis por props ou states

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

const Prototype2: React.FC = () => {
    //states
    const [listaDeCartas, setListaDeCartas] = useState<JSX.Element[]>([]);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    // useEffect executa logo após a renderização do componente
    // contém toda a lógica que transforma o array "cartas" em uma lista de componentes JSX
    useEffect(() => {
            const cartasDuplicado = [...cartas, ...cartas];
            embaralharCartas(cartasDuplicado)

    }, []);
    //"[]" garante que useEffect execute só uma vez

    function embaralharCartas(cartasDuplicado: object[]) {
        const cartasEmbaralhadas = cartasDuplicado.sort(() => Math.random() - 0.5)
        inserirCartasNoPainel(cartasEmbaralhadas)
    }

    function inserirCartasNoPainel(cartasEmbaralhadas: object[]) {
        const cartasRenderizadas = cartasEmbaralhadas.map((item, index) => (
            <div key={index} className='relative'>
                <img onClick={() => processarCliqueNasCartas(item, index)} className='cartasClicaveis' src={item.srcId} alt="Carta" />
                <img className={`absolute top-0 right-0 w-full h-full pointer-events-none ${clickedIndex === index ? 'hidden' : 'visible'}`} src={item.srcAnonimo} alt="Ícone de ?" />
            </div>
        ));
        setListaDeCartas(cartasRenderizadas)
    }

    let clickCounter:number = 0;
    let primeiroSrc:string = '';
    let segundoSrc: string = '';

    function processarCliqueNasCartas(src:string, index:number) {
        verificarSeCartasSaoIguais(src);
        // animClique(index);
        setClickedIndex(index);
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



    useEffect(() => {
        if (clickedIndex !== null) {
          const cartasDuplicado = [...cartas, ...cartas];
          embaralharCartas(cartasDuplicado);
        }
      }, [clickedIndex]);




    

    return (
        <div className='mx-auto border border-gray-100 bg-gray-900 w-[800px] h-[800px]'>
            <div className='relative grid grid-cols-2 grid-rows-2'>
                {listaDeCartas}
            </div>

        </div>
    );
};

export default Prototype2;

//<div className='absolute top-0 right-0 w-full h-full pointer-events-none bg-red-500 z-20'></div>


// function animClique(index:number) {
//     setClickedIndex(index);
//     console.log(index)
//     console.log(clickedIndex)
// }

// fazer um array fixo após clicar em iniciar
// sobrepor dois componentes, um com imagens reais e outro com imagens anonimas
// se index do componente 1 é igual index do componente 2, match
// rerenderiza componente 2 para esconder cartaAnonima clicada, sem rerenderizar cartas reais