import React, { useState, useEffect  } from 'react';

interface cartasAnomProps {
    faseAtual: number;
    estiloDasDivsDasCartas: string;
    numeroDeCartas: number | null;
    cartasEmbaralhadas: string[];
    setVenceuDesafioAtual: React.Dispatch<React.SetStateAction<boolean>>;
    srcAnom: string;
    estilosDasFases: string[];
}

const CartasAnom: React.FC <cartasAnomProps> = ({faseAtual, estiloDasDivsDasCartas, numeroDeCartas, cartasEmbaralhadas, setVenceuDesafioAtual, srcAnom, estilosDasFases }) => {

    const [IndexDeCartaAnon ,setIndexDeCartaAnon] = useState <number[]> ([]);
    const [ListaDeCartasAnom, setListaDeCartasAnom] = useState <JSX.Element[]> ([]);
    const [checkCounter, setCheckCounter] = useState <number> (1)
    const [src1, setSrc1] = useState<string>('');
    const [index1, setIndex1] = useState<number>(-1);
    const [cartasAEliminar, setCartasAEliminar] = useState<number[]> ([])
    const [contadorDeMatches, setContadorDeMatches] = useState<number>(0)
    const [fimDeJogo, setFimDeJogo] = useState<boolean>(false)
    const [bloquearClicksAnom ,setBloquearClicksAnom] = useState <boolean> (false)


    
    const arrayDeAnoms:string[] = [];
    if (numeroDeCartas !== null) {
        for (let i = 0; i < numeroDeCartas; i++) {
            arrayDeAnoms.push(srcAnom)
        }
    }

    function evitarArrastarImg(event: React.DragEvent<HTMLImageElement>) {
        event.preventDefault();
    }
    
    useEffect(() => {
        //não alterar "carta${index+1}"
        const cartasAnomRenderizadas = arrayDeAnoms.map((item, index) => (
            <div 
                key={index}
                className={`${estiloDasDivsDasCartas}
                carta${index+1}`}
            > 
                
                <img
                    className={
                        //anomAnim = css para velocidade da animação
                        //animarCartaAnom = css para animar virada de carta anom
                        //eliminarCarta = css para fazer carta anom sair do jogo
                        `anomAnim
                        ${IndexDeCartaAnon.includes(index) ? 'animarCartaAnom' : '' }   
                        ${cartasAEliminar.includes(index) ? 'eliminarCarta' : ''}`}
                    onDragStart={evitarArrastarImg}  
                    onClick={() => animarClique(index)}
                    src={item} 
                    alt="Carta de ?"
                />
            
            </div>
        ));
        setListaDeCartasAnom(cartasAnomRenderizadas)
    

    

    }, [numeroDeCartas, IndexDeCartaAnon]);

    //sempre que um anom é clicado, o index da div dele é adicionado
    //no array vazio "IndexDeCartaAnom", após dois indexes serem adicionados
    //no array (um par de cartas), chama-se checarSeCartasReaisSaoIguais(index);

    function animarClique(index:number) {
        console.log(index)
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
            setBloquearClicksAnom(true)

            setTimeout(() => {
                setBloquearClicksAnom(false)
            }, 2000);

            console.log('cliques bloqueados')
            if (src1 === cartasEmbaralhadas[index]) { //se indexes sao iguais
                setTimeout(() => {
                eliminarCartasIguais(index1, index) // chama eliminarCartasIguais
                
                console.log('cliques liberados')
            }, 1000); 
            } else { // se não forem (player clicou em duas cartas diferentes)
                setTimeout(() => {
                    setIndexDeCartaAnon([]); // reseta o array de indexes
                    
                    console.log('cliques liberados')
                }, 1000); 
            }
            setCheckCounter(1)
        }


        
    }

    function eliminarCartasIguais(index1:number, index2:number) {
        setCartasAEliminar((prev) => [...prev, index1, index2]); // adiciona indesxes em um array de cartas anom a ter opacidade 0
        setIndexDeCartaAnon([]); // reseta array de indexes
        setContadorDeMatches(prevContador => prevContador + 1)

    }

    useEffect(() => {
        if (contadorDeMatches > 0 && contadorDeMatches === Math.floor(cartasEmbaralhadas.length / 2)) {
            setFimDeJogo(true);
        }
    }, [contadorDeMatches, cartasEmbaralhadas.length]);

    useEffect(() => {
        if (fimDeJogo) {

            setVenceuDesafioAtual(true)
        }
    }, [fimDeJogo]);
    
    return (
        <div className={` 
            ${bloquearClicksAnom ? 'pointer-events-auto' : 'pointer-events-auto'} 
            ${estilosDasFases[faseAtual]}`}>
                
                {ListaDeCartasAnom}
        
        </div>


    );
};

export default CartasAnom;

{/* <div className={`p-4 grid gap-2 grid-rows-2 grid-cols-2 w-[500px] m-auto opacity-0`}>
{ListaDeCartasAnom}
</div> */}