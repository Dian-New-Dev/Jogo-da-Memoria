import React, {useEffect, useState, useRef} from 'react';
import cartasOriginal from '../data/ArmazemDeCartas';
import nomeDasCartas from '../data/ArmazemDeNomes';
import nomeDasCartasEN from '../data/ArmazemDeNomesEN';

import descricoesDasCartas from '../data/ArmazemDeDescricoes';
import descricoesDasCartasEN from '../data/ArmazemDeDescricoesEN';

import descricaoMusic from '../assets/audio/music/descricao.mp3'
import viraCartaAudio from '../assets/audio/sfx/vira-carta.mp3';
import finalizarDescAudio from '../assets/audio/sfx/finalizar-desc.mp3'

import cartaAnom from '../assets/images/cartas/anom.jpg'

interface DescricaoDasCartasProps {
    language: number;
    faseAtual: number;
    indexA: number;
    indexB: number;
    setRenderizarDescricaoDasCartas: React.Dispatch<React.SetStateAction<boolean>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
}



const DescricaoDasCartas: React.FC <DescricaoDasCartasProps> = ({ language, faseAtual, indexA, indexB, setRenderizarDescricaoDasCartas, setRenderizarGameLogic }) => {
       
    const [fase1, setFase1] = useState <boolean> (false);
    const [descABlock, setDescABlock] = useState <boolean> (false);
    const [descBBlock, setDescBBlock] = useState <boolean> (false);
    const [mostrarCartaA, setMostrarCartaA] = useState <boolean> (true);
    const [mostrarCartaB, setMostrarCartaB] = useState <boolean> (true);
    const [srcA, setSrcA] = useState <string> (cartaAnom);
    const [srcB, setSrcB] = useState <string> (cartaAnom);
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

    // function fecharDescricao() {
    //     setDescBBlock(false)
    //     setMostrarCartaB(true)
    //     setMostrarBotaoAvancar(true)
    // }

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
                            <p>
                                {language === 0 ? 
                                'O alívio da vitória lhe clareia a mente.'
                                :
                                'The relief of victory clears your mind.'
                                }
                                
                            </p>

                            <p>
                            {language === 0 ? 
                                'As cartas no livro vão ficando familiares...'
                                :
                                'The cards on the book are becoming familiar...'
                                }
                                
                            </p>
                        </div>
            
                        <div className='relative z-40 w-full h-full'>
                            <div className='text-center lg:text-start xl:px-48 p-4 py-24 xl:p-24 flex flex-col gap-4 lg:gap-0 items-center lg:flex-row absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] 2xl:w-[80%] h-full background-descricoes rounded-md '>
                                <div className={`relative w-[200px]  lg:w-1/2 h-full ${mostrarCartaA ? 'block' : 'hidden'} `}>
                                    <img onClick={mostrarDescricaoA} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemA ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcA} alt="" />
                                </div>
            
                                <div className={`relative w-full lg:w-1/2 h-full ${descABlock ? 'block' : 'hidden'}`}>
                                    <div className='fonte-papyrus p-16 flex flex-col justify-center gap-4 w-full h-full'>
                                        
                                            <p className='text-amber-600 font-bold text-2xl xl:text-4xl contorno-de-texto'>
                                                
                                                
                                                {language === 0 ? 
                                                    `${nomeDasCartas[indexA]}`
                                                    :
                                                    `${nomeDasCartasEN[indexA]}`
                                                }
                                                
                                                
                                                
                                            </p>
                                            
                                            <p className='text-gray-800 font-bold text-xl xl:text-2xl'>
                                                {language === 0 ? 
                                                    `${descricoesDasCartas[indexA]}`
                                                    :
                                                    `${descricoesDasCartasEN[indexA]}`
                                                }
                                                
                                                
                                            </p>
                                            <div className='mt-4 w-full'>
                                                <button onClick={fecharDescricoes} className='mx-auto w-[200px] font-bold text-gray-900 underline'>
                                                    {language === 0 ? 'Voltar' : 'Return'}
                                                    
                                                    
                                                </button>
                                            </div>        
                                    </div>
                                </div>
            
                                <div className={`relative w-full lg:p-8 xl:p-0 lg:w-1/2  h-full ${descBBlock ? 'block' : 'hidden'}`}>
                                    <div className='fonte-papyrus p-16 flex flex-col justify-center gap-4 w-full h-full'>
                                        <p className='text-amber-600 font-bold text-2xl xl:text-4xl contorno-de-texto'>
                                                {language === 0 ? 
                                                    `${nomeDasCartas[indexB]}`
                                                    :
                                                    `${nomeDasCartasEN[indexB]}`
                                                }
                                        </p>
                                        
                                        <p className='text-gray-800 font-bold text-xl xl:text-2xl'>
                                                {language === 0 ? 
                                                    `${descricoesDasCartas[indexB]}`
                                                    :
                                                    `${descricoesDasCartasEN[indexB]}`
                                                }
                                        </p>
                                        
                                        <div className='mt-4 w-full'>
                                            <button onClick={fecharDescricoes} className='mx-auto w-[200px] font-bold text-gray-900 underline'>
                                                {language === 0 ? 'Voltar' : 'Return'}
                                            </button>
                                        </div>        
                                    </div>
                                </div>
            
                                <div className={`relative w-[200px] lg:w-1/2 h-full ${mostrarCartaB ? 'block' : 'hidden'} `}>
                                    <img onClick={mostrarDescricaoB} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemB ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcB} alt="" />
                                </div>
            
            
                                
                            </div>
                            <div className={`absolute inset-0 flex items-center justify-center bg-red-70 fonte-headline text-3xl ${mostrarBotaoAvancar ? 'block': 'hidden'} ` }>
                                <button onClick={terminarComponente} className={`fonte-headline text-3xl p-2 border bg-amber-600 border-amber-700 rounded-md text-amber-950`}>
                                    {language === 0 ? 'Finalizar' : 'Finish'}
                                </button>
                            </div>
            
                            
                            <audio ref={musicaDescricao} src={descricaoMusic} onEnded={playMusicaDesc}></audio>
                            <audio ref={cartaClickAudioRef} src={viraCartaAudio}></audio>
                            <audio ref={finalizarDescAudioRef} src={finalizarDescAudio}></audio>
                            
                        </div>
                    </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center 2xl:gap-8'>

                    <div className='p-4 relative z-50 text-amber-400 text-center flex flex-col gap-2 fonte-headline text-2xl pointer-events-none'>
                        
                        
                            <p>
                                {language === 0 ? 
                                'O alívio da vitória lhe clareia a mente.'
                                :
                                'The relief of victory clears your mind.'
                                }
                                
                            </p>

                            <p>
                            {language === 0 ? 
                                'A nova carta vai ficando familiar...'
                                :
                                'The new card starts to become familiar...'
                                }
                                
                            </p>
                    </div>
    
                    <div className='relative z-40 w-full h-full'>
                        <div className='2xl:px-48 py-24 lg:p-24 2xl:p-24 flex  flex-col items-center lg:gap-4 lg:flex-row absolute top-0 left-1/2 transform -translate-x-1/2 w-full lg:w-[80%] h-full background-descricoes rounded-md '>
                            <div className={`relative  w-[200px] lg:w-1/2 h-full ${mostrarCartaB ? 'block' : 'hidden'} `}>
                                <img onClick={mostrarDescricaoB} className={`w-full h-full object-contain cursor-pointer ${tirarClickImagemB ? 'pointer-events-none' : 'pointer-events-auto'} ` } src={srcB} alt="" />
                            </div>
        
                            <div className={`relative w-full text-center lg:text-start lg:w-1/2 h-full ${descBBlock ? 'block' : 'hidden'}`}>
                                <div className=' fonte-papyrus  p-16 lg:p-0 flex flex-col justify-center xl:gap-4 w-full h-full'>
                                    
                                        <p className='text-amber-600 font-bold text-2xl lg:text-xl xl:text-4xl contorno-de-texto'>
                                            {language === 0 ? `${nomeDasCartas[indexB]}` : `${nomeDasCartasEN[indexB]}`}
                                            
                                        </p>
                                        <p className='text-gray-800 font-bold text-xl lg:text-lg xl:text-2xl'>
                                            {language === 0 ? `${descricoesDasCartas[indexB]}` : `${descricoesDasCartasEN[indexB]}`}
                                            
                                        </p>
                                        <div className='mt-4 w-full'>
                                            <button onClick={terminarComponente} className='mx-auto w-[200px] font-bold text-gray-900 underline'>
                                                {language === 0 ? 'Finalizar' : 'Finish'} 
                                            </button>
                                        </div>        
                                </div>
                            </div>
                             
                        </div>

                        <div className={`absolute inset-0 flex items-center justify-center bg-red-70 fonte-headline text-3xl ${mostrarBotaoAvancar ? 'block': 'hidden'} ` }>
                            <button onClick={terminarComponente} className={`fonte-headline text-3xl p-2 border bg-amber-600 border-amber-700 rounded-md text-amber-950`}>
                                {language === 0 ? 'Finalizar' : 'Finish'} 
                            </button>
                        </div>
        
                        
                        <audio ref={musicaDescricao} src={descricaoMusic} onEnded={playMusicaDesc}></audio>
                        <audio ref={cartaClickAudioRef} src={viraCartaAudio}></audio>
                        <audio ref={finalizarDescAudioRef} src={finalizarDescAudio}></audio>
                    </div>
            </div>
            )}
        </div>
    
    );
};

export default DescricaoDasCartas;