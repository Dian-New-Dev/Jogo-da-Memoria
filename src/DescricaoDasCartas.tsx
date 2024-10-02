import React, {useEffect, useState, useRef} from 'react';
import cartasOriginal from './data/ArmazemDeCartas';
import nomeDasCartas from './data/ArmazemDeNomes';
import descricoesDasCartas from './data/ArmazemDeDescricoes';

interface DescricaoDasCartasProps {
    faseAtual: number;
    indexA: number;
    indexB: number;
    setRenderizarDescricaoDasCartas: React.Dispatch<React.SetStateAction<boolean>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
}



const DescricaoDasCartas: React.FC <DescricaoDasCartasProps> = ({ faseAtual, indexA, indexB, setRenderizarDescricaoDasCartas, setRenderizarGameLogic }) => {
       
    const [fase1, setFase1] = useState <boolean> (false);
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

    useEffect(() => {
        playMusicaDesc();
        if ((faseAtual-1) === 1) {
            setFase1(true)
        } else {
            setFase1(false)
        }
    }, [faseAtual])

    function mostrarDescricaoA () {
        cartaClickSound();
        setSrcA(cartasOriginal[indexA])
        setMostrarCartaB(false)
        setDescABlock(true)
        setTirarClickImagemA(true)
    }

    function mostrarDescricaoB () {
        cartaClickSound();
        setSrcB(cartasOriginal[indexB])
        setMostrarCartaA(false)
        setDescBBlock(true)
        setTirarClickImagemB(true)
    }

    function fecharDescricoes() {
        setBotaoAvancarCounter(prev => prev + 1)
        setDescABlock(false)
        setDescBBlock(false)
        setMostrarCartaA(true)
        setMostrarCartaB(true)
    }

    function fecharDescricao() {
        setDescBBlock(false)
        setMostrarCartaB(true)
        setMostrarBotaoAvancar(true)
    }

    useEffect(() => {
        if (botaoAvancarCounter === 2) {
            setMostrarBotaoAvancar(true)
        }
    }, [botaoAvancarCounter])

    const finalizarDescAudioRef = useRef<HTMLAudioElement | null>(null);

    const somFinalizarDesc = () => {
        finalizarDescAudioRef.current?.play();
    } 

    const [fadeOut, setFadeOut] = useState<boolean>(false)

    function terminarComponente() {
        somFinalizarDesc();
        //4 segundos para terminar componente, aplicar transição fade-out:
        setFadeOut(true)

        setTimeout(() => {
            setRenderizarDescricaoDasCartas(false)
            setRenderizarGameLogic(true)
        }, 4000);

    }

    //musica / audio \/

    const musicaDescricao = useRef<HTMLAudioElement | null>(null);

    const playMusicaDesc = () => {
        musicaDescricao.current?.play();
    } 

    const cartaClickAudioRef = useRef<HTMLAudioElement | null>(null);

    const cartaClickSound = () => {
        cartaClickAudioRef.current?.play();
    }
        
    return (

        <div className={`w-full h-screen transicao-opacidade-imagens opacity-100 ${fadeOut ? 'transicao-out' : ''}`}>
            

            {fase1 ? (
                        
                        <div className='w-full h-screen flex flex-col items-center gap-8'>

                        <div className='p-4 relative z-50 text-amber-400 text-center flex flex-col gap-2 fonte-headline text-2xl pointer-events-none'>
                            <p>O alívio da vitória lhe clareia a mente.</p>
                            <p>As cartas no livro vão ficando familiares...</p>
                        </div>
            
                        <div className='relative z-40 w-full h-full'>
                            <div className='px-48  p-24 flex absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-full background-descricoes rounded-md '>
                            <div className={`relative w-1/2 h-full ${mostrarCartaA ? 'block' : 'hidden'} `}>
                                    <img onClick={mostrarDescricaoA} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemA ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcA} alt="" />
                                </div>
            
                                <div className={`relative w-1/2 h-full ${descABlock ? 'block' : 'hidden'}`}>
                                    <div className='fonte-papyrus p-16 flex flex-col justify-center gap-4 w-full h-full'>
                                        
                                            <p className='text-amber-600 font-bold text-4xl contorno-de-texto'>{nomeDasCartas[indexA]}</p>
                                            <p className='text-gray-800 font-bold text-2xl'>{descricoesDasCartas[indexA]}</p>
                                            <div className='mt-4 w-full'>
                                                <button onClick={fecharDescricoes} className='mx-auto w-[200px] font-bold text-gray-900 underline'>Voltar</button>
                                            </div>        
                                    </div>
                                </div>
            
                                <div className={`relative w-1/2 h-full ${descBBlock ? 'block' : 'hidden'}`}>
                                    <div className='fonte-papyrus p-16 flex flex-col justify-center gap-4 w-full h-full'>
                                        <p className='text-amber-600 font-bold text-4xl contorno-de-texto'>{nomeDasCartas[indexB]}</p>
                                        <p className='text-gray-800 font-bold text-2xl'>{descricoesDasCartas[indexB]}</p>
                                        <div className='mt-4 w-full'>
                                            <button onClick={fecharDescricoes} className='mx-auto w-[200px] font-bold text-gray-900 underline'>Voltar</button>
                                        </div>        
                                    </div>
                                </div>
            
                                <div className={`relative w-1/2 h-full ${mostrarCartaB ? 'block' : 'hidden'} `}>
                                    <img onClick={mostrarDescricaoB} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemB ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcB} alt="" />
                                </div>
            
            
                                
                            </div>
                            <div className={`absolute inset-0 flex items-center justify-center bg-red-70 fonte-headline text-3xl ${mostrarBotaoAvancar ? 'block': 'hidden'} ` }>
                                <button onClick={terminarComponente} className={`fonte-headline text-3xl p-2 border bg-amber-600 border-amber-700 rounded-md text-amber-950`}>Finalizar</button>
                            </div>
            
                            
                            <audio ref={musicaDescricao} src={"./assets/audio/music/descricao.mp3"} onEnded={playMusicaDesc}></audio>
                            <audio ref={cartaClickAudioRef} src={"./assets/audio/sfx/vira-carta.mp3"}></audio>
                            <audio ref={finalizarDescAudioRef} src={"./assets/audio/sfx/finalizar-desc.mp3"}></audio>
                            
                        </div>
                    </div>
            ) : (
                <div className='w-full h-screen flex flex-col items-center gap-8'>

                    <div className='p-4 relative z-50 text-amber-400 text-center flex flex-col gap-2 fonte-headline text-2xl pointer-events-none'>
                        <p>O alívio da vitória lhe clareia a mente.</p>
                        <p>A nova carta lhe parece familiar...</p>
                    </div>
    
                    <div className='relative z-40 w-full h-full'>
                        <div className='px-48  p-24 flex absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-full background-descricoes rounded-md '>
                        <div className={`relative w-1/2 h-full ${mostrarCartaB ? 'block' : 'hidden'} `}>
                                <img onClick={mostrarDescricaoB} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemB ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcB} alt="" />
                            </div>
        
                            <div className={`relative w-1/2 h-full ${descBBlock ? 'block' : 'hidden'}`}>
                                <div className='fonte-papyrus p-16 flex flex-col justify-center gap-4 w-full h-full'>
                                    
                                        <p className='text-amber-600 font-bold text-4xl contorno-de-texto'>{nomeDasCartas[indexB]}</p>
                                        <p className='text-gray-800 font-bold text-2xl'>{descricoesDasCartas[indexB]}</p>
                                        <div className='mt-4 w-full'>
                                            <button onClick={fecharDescricao} className='mx-auto w-[200px] font-bold text-gray-900 underline'>Voltar</button>
                                        </div>        
                                </div>
                            </div>
                             
                        </div>

                        <div className={`absolute inset-0 flex items-center justify-center bg-red-70 fonte-headline text-3xl ${mostrarBotaoAvancar ? 'block': 'hidden'} ` }>
                            <button onClick={terminarComponente} className={`fonte-headline text-3xl p-2 border bg-amber-600 border-amber-700 rounded-md text-amber-950`}>Finalizar</button>
                        </div>
        
                        
                        <audio ref={musicaDescricao} src={"./assets/audio/music/descricao.mp3"} onEnded={playMusicaDesc}></audio>
                        <audio ref={cartaClickAudioRef} src={"./assets/audio/sfx/vira-carta.mp3"}></audio>
                        <audio ref={finalizarDescAudioRef} src={"./assets/audio/sfx/finalizar-desc.mp3"}></audio>
                    </div>
            </div>
            )}
        </div>


    
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