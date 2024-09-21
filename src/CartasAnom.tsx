import React, { useState, useEffect  } from 'react';

interface cartasAnomProps {
    numeroDeCartas: number | null;
    cartasEmbaralhadas: string[];
    setVenceuDesafioAtual: React.Dispatch<React.SetStateAction<boolean>>;
    srcAnom: string;
    estilosDasFases: string[];
}

const CartasAnom: React.FC <cartasAnomProps> = ({numeroDeCartas, cartasEmbaralhadas, setVenceuDesafioAtual, srcAnom, estilosDasFases }) => {

    const [IndexDeCartaAnon ,setIndexDeCartaAnon] = useState <number[]> ([]);
    const [ListaDeCartasAnom, setListaDeCartasAnom] = useState <JSX.Element[]> ([]);
    const [checkCounter, setCheckCounter] = useState <number> (1)
    const [src1, setSrc1] = useState<string>('');
    const [index1, setIndex1] = useState<number>(-1);
    const [cartasAEliminar, setCartasAEliminar] = useState<number[]> ([])
    const [contadorDeMatches, setContadorDeMatches] = useState<number>(0)
    const [fimDeJogo, setFimDeJogo] = useState<boolean>(false)


    
    const arrayDeAnoms:string[] = [];
    if (numeroDeCartas !== null) {
        for (let i = 0; i < numeroDeCartas; i++) {
            arrayDeAnoms.push(srcAnom)
        }
    }
    
    useEffect(() => {
        
        const cartasAnomRenderizadas = arrayDeAnoms.map((item, index) => (
            <div key={index} className={`relative`}>
                <img onClick={() => animarClique(index)} className={`anomAnim ${IndexDeCartaAnon.includes(index) ? 'animarCartaAnom' : '' } eliminarCartaAnim ${cartasAEliminar.includes(index) ? 'eliminarCarta' : ''}`} src={item} alt="Carta de ?" />
            </div>
        ));
        setListaDeCartasAnom(cartasAnomRenderizadas)
    

    

    }, [numeroDeCartas, IndexDeCartaAnon]);

    function animarClique(index:number) {
        if (IndexDeCartaAnon.length < 2) {
            setIndexDeCartaAnon([...IndexDeCartaAnon, index]);
            checarSeCartasReaisSaoIguais(index);
        } else {
            setIndexDeCartaAnon([])
        }
        
    }


    function checarSeCartasReaisSaoIguais(index:number) {
        setCheckCounter(prevCounter => prevCounter + 1)
        if (checkCounter === 1) {
            setSrc1(cartasEmbaralhadas[index]);
            setIndex1(index)
        } else {

            if (src1 === cartasEmbaralhadas[index]) {
                setTimeout(() => {
                eliminarCartasIguais(index1, index)
            }, 1000); 
            } else {
                setTimeout(() => {
                    setIndexDeCartaAnon([]);
                }, 1000); 
            }
            setCheckCounter(1)
        }


        
    }

    function eliminarCartasIguais(index1:number, index2:number) {
        setCartasAEliminar((prev) => [...prev, index1, index2]);
        setIndexDeCartaAnon([]);
        setContadorDeMatches(prevContador => prevContador + 1)

    }

    useEffect(() => {
        if (contadorDeMatches > 0 && contadorDeMatches === Math.floor(cartasEmbaralhadas.length / 2)) {
            setFimDeJogo(true);
        }
    }, [contadorDeMatches, cartasEmbaralhadas.length]);

    useEffect(() => {
        if (fimDeJogo) {
            console.log('venceu!!!')
            setVenceuDesafioAtual(true)
        }
    }, [fimDeJogo]);
    
    return (
        <div className={`p-4 grid gap-2 grid-rows-2 grid-cols-2 w-[500px] m-auto`}>
            {ListaDeCartasAnom}
        </div>


    );
};

export default CartasAnom;