import React, { useState, useEffect } from 'react';

interface cartasAnomProps {
    numeroDeCartas: number | null;
}

const CartasAnom: React.FC<cartasAnomProps> = ({numeroDeCartas}) => {

    const [IndexDeCartaAnon ,setIndexDeCartaAnon] = useState <number[]> ([]);
    const [ListaDeCartasAnom, setListaDeCartasAnom] = useState <JSX.Element[]> ([]);


    const arrayDeAnoms:string[] = [];
    if (numeroDeCartas !== null) {
        for (let i = 0; i < numeroDeCartas; i++) {
            arrayDeAnoms.push('./assets/images/prototype/anom.jpg')
        }
    }
    
    useEffect(() => {
        
        const cartasAnomRenderizadas = arrayDeAnoms.map((item, index) => (
            <div key={index} className={`relative`}>
                <img onClick={() => animarClique(index)} className={`anomAnim ${IndexDeCartaAnon.includes(index) ? 'animarCartaAnom' : '' }`} src={item} alt="Carta de ?" />
            </div>
        ));
        setListaDeCartasAnom(cartasAnomRenderizadas)
    

    

    }, [numeroDeCartas, IndexDeCartaAnon]);

    function animarClique(index:number) {
        if (IndexDeCartaAnon.length < 2) {
            setIndexDeCartaAnon([...IndexDeCartaAnon, index]);
            if (IndexDeCartaAnon.length === 1) {
                setTimeout(() => {
                    setIndexDeCartaAnon([]);
                }, 1000); // 1000 milliseconds = 1 
            }
        } else {
            setIndexDeCartaAnon([])
        }
        
    }

    return (
        <div className='p-4  grid gap-2 grid-row-2 grid-cols-2 w-[500px] mx-auto grid-rows-2'>
            {ListaDeCartasAnom}
        </div>


    );
};

export default CartasAnom;