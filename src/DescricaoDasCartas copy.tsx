import React, {useState} from 'react';
import cartasOriginal from './data/ArmazemDeCartas';
import nomeDasCartas from './data/ArmazemDeNomes';
import descricoesDasCartas from './data/ArmazemDeDescricoes';

interface DescricaoDasCartasProps {
    indexA: number;
    indexB: number;
    setRenderizarDescricaoDasCartas: React.Dispatch<React.SetStateAction<boolean>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
}



const DescricaoDasCartas: React.FC <DescricaoDasCartasProps> = ({ indexA, setRenderizarDescricaoDasCartas, setRenderizarGameLogic }) => {
  
    const [descABlock, setDescABlock] = useState <boolean> (false);
    const [descBBlock, setDescBBlock] = useState <boolean> (false);
    const [mostrarCartaA, setMostrarCartaA] = useState <boolean> (true);
    const [mostrarCartaB, setMostrarCartaB] = useState <boolean> (true);
    const [srcA, setSrcA] = useState <string> ('./assets/images/cartas/anom.jpg');
    const [srcB, setSrcB] = useState <string> ('./assets/images/cartas/anom.jpg');
    const [tirarClickImagemA, setTirarClickImagemA] = useState<boolean>(false)
    const [tirarClickImagemB, setTirarClickImagemB] = useState<boolean>(false)
    const [botaoAvancarCounter, setBotaoAvancarCounter ] = useState <number> (0)
    const [mostrarBotaoAvancar, setMostrarBotaoAvancar] = useState <boolean> (false)

    function mostrarDescricaoA () {
        setSrcA(cartasOriginal[indexA])
        setMostrarCartaB(false)
        setDescABlock(true)
        setTirarClickImagemA(true)
    }

    function terminarComponente() {
        setRenderizarDescricaoDasCartas(false)
        setRenderizarGameLogic(true)
    }
        
    return (

        w-full h-screen
    
        // <div className='w-full h-screen flex flex-col items-center p-12 gap-8'>
        //     <div className='text-amber-400 text-center flex flex-col gap-2 fonte-headline text-2xl'>
        //         <p>O alívio da vitória lhe clareia a mente.</p>
        //         <p>𓂧𓌅𓉐𓁶</p>
        //         <p>As cartas no livro vão ficando familiares...</p>
        //     </div>
           
        //    <div className='flex items-center justify-center'>
        //         <div className='fonte-papyrus p-2 flex justify-center gap-4 w-1/2'>
        //             <img className='w-1/2 border-4 border-double border-amber-700' src={cartasOriginal[indexA]} alt="Carta1" />
        //             <div className='text-amber-800 w-1/2 flex flex-col gap-4'>
        //                 <p className='font-bold text-4xl'>{nomeDasCartas[indexA]}</p>
        //                 <p className='text-lg'>{descricoesDasCartas[indexA]}</p>
        //             </div>
        //         </div>

        //         <div className='fonte-papyrus p-2 flex justify-center gap-4 w-1/2'>
        //             <img className='w-1/2 border-4 border-double border-amber-700' src={cartasOriginal[indexB]} alt="Carta2" />
        //             <div className='text-amber-800 w-1/2 flex flex-col gap-4'>
        //                 <p className='font-bold text-4xl'>{nomeDasCartas[indexB]}</p>
        //                 <p className='text-lg'>{descricoesDasCartas[indexB]}</p>
        //             </div>
        //         </div>
        //    </div>

        //     <button className='z-50 text-white fonte-papyrus bg-amber-600 p-4 rounded-lg font-bold pointer-events-auto'>Avançar</button>
        // </div>
    
    );
};

export default DescricaoDasCartas;