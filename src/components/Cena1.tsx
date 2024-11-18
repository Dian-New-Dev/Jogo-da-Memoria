import React, { useState, useEffect } from 'react';
import TypingAnimator from 'react-typing-animator';

import painel1Img from '../assets/images/cena1/painel1.png';
import painel2Img from '../assets/images/cena1/painel2.jpg';
import painel3Img from '../assets/images/cena1/painel3.jpeg';

interface Cean1Props {
    language: number;
    setComecarCena1: React.Dispatch<React.SetStateAction<boolean>>;
    setFaseAtual: React.Dispatch<React.SetStateAction<number>>;
    setRenderizarGameLogic: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cena1: React.FC<Cean1Props> = ({ language, setComecarCena1, setFaseAtual, setRenderizarGameLogic }) => {

    const [cena1Comecou, setCena1Comecou] = useState <boolean> (false)
    const [aparecerTexto, setAparecerTexto] = useState <boolean> (false)
    const [sumirCaixaDeTexto, setSumirCaixaDeTexto] = useState <boolean> (true)
    const [aparecerImagem1, setAparecerImagem1] = useState <boolean> (false)
    const [aparecerImagem2, setAparecerImagem2] = useState <boolean> (false)
    const [aparecerImagem3, setAparecerImagem3] = useState <boolean> (false)
    const [sumirAsImagens, setSumirasImagens] = useState <boolean> (false)
    const [fadeOut, setFadeOut] = useState <boolean> (false)
    const [sumirImagem, setSumirImagem] = useState <boolean> (false)

    useEffect (() => {
        setTimeout(() => {
            setCena1Comecou(true)
        }, 1000);
    }, [])

    function comecarApresentacao() {
        setSumirCaixaDeTexto(false)
    }

    function comecarAparecerTexto() {
        setTimeout(() => {
            setAparecerTexto(true)
            mostrarImagem1()
        }, 1000);
    }

    function mostrarImagem1() {
        setAparecerImagem1(true)
        mostrarImagem2()
    }

    function mostrarImagem2() {
        setTimeout(() => {
            setAparecerImagem2(true)
            mostrarNada()
        }, 18000);
        
    }

    function mostrarNada() {
        setTimeout(() => {
            setSumirasImagens(true)
            mostrarImagem3();
        }, 20000);
        
    }

    function mostrarImagem3() {
        setTimeout(() => {
            setAparecerImagem1(false)
            setAparecerImagem2(false)
            setSumirImagem(true)
        }, 5000);
        setTimeout(() => {
            setSumirasImagens(false)
            setAparecerImagem3(true)
            terminarCena1()
        }, 15000);
    }

    function terminarCena1() {
        setTimeout(() => {
            setTimeout(() => {
                setComecarCena1(false)
                setFaseAtual(1) // passa para a primeira fase
                setRenderizarGameLogic(true)
            }, 4000);
            setSumirImagem(true)
            setSumirCaixaDeTexto(true);
            setAparecerImagem1(false); // Explicitly hide it here
            setAparecerImagem2(false);
            setAparecerImagem3(false); // Hides image 3
            setFadeOut(true);
        }, 22000);
    }

    function pularCena1() {
        setComecarCena1(false)
        setFaseAtual(1) // passa para a primeira fase
        setRenderizarGameLogic(true)
    }



    return (
    
        <div className={`w-full h-screen relative transicao-opacidade ${fadeOut ? 'transicao-out' : 'trasicao-in'} `}>

            <div onTransitionEnd={comecarApresentacao} className={`z-0 grid place-items-center w-full h-screen absolute top-0 left-0 fonte-headline text-amber-400 text-5xl transicao-opacidade ${cena1Comecou ? 'transicao-out' : ''} `}>
                <p>
                    <>
                        {language === 0 ? 
                        'Capítulo 1'
                        :
                        'Chapter 1'
                        }
                    </>   
                </p>
            </div>

            <div id='paineis-container' className='w-full h-screen relative fonte-papyrus text-gray-800 text-lg font-bold'>

                <>
                {
                    language === 0 ?
                        <div onTransitionEnd={comecarAparecerTexto} className={`z-50 absolute bottom-0 grid place-items-center fundo-de-pergaminho w-full h-[300px] transicao-opacidade ${sumirCaixaDeTexto ? 'transicao-out' : 'transicao-in'}`}>
                            {aparecerTexto &&

                                <TypingAnimator
                                    textArray={[
                                            'Por quatro dias você caminhou sob o tórrido sol do deserto.',
                                            'O pouco de água e os três calangos que a comitiva real lhe forneceu antes de sua saída se esgotaram pela manhã.',
                                            'Atrás de si, o reino já não é mais visível. Adiante, somente o infinito deserto.',
                                            'Quente.',
                                            'Cruel.',
                                            'Vazio.',
                                            'Seus limites estão próximos. Sua esperança de ser o escolhido pelos deuses a salvar o reino e honrar seu faraó, a um fio de se romper, junto com suas forças de continuar.',
                                            'É quando você vê.',
                                            'Impossível não ver. Desponta, quase brilha, em meio à mesmice enlouquecedora da paisagem.',
                                            'Um púlpito de pedra, cravado na areia. Inscrições estranhas em seu relevo não importam. Sobre si, um livro aberto em duas páginas. A da direita, em branco. A da esquerda, com as seguintes inscrições:',
                                            '“Eu guardo a água. Eu guardo a vida. Vença meu desafio, e viva mais um dia para continuar sua busca.”',
                                            '',
                                            '',
                                    ]}
                                    cursorColor="#ffffff00"
                                    textColor="#555"
                                    fontSize="20px"
                                    loop={false}
                                    typingSpeed={60}
                                    delaySpeed={2000}
                                    backspace={false}
                                    height="auto"
                                    dynamicDelay={false}
                                    style={{
                                        textAlign: 'center',
                                        fontFamily: 'Papyrus',
                                        fontWeight: 'bold',
                                        marginTop: '10px',
                                        caretColor: 'transparent',
                                        width: '600px',
                                    }}
                                />

                            }
                        </div>
                    :
                        <div onTransitionEnd={comecarAparecerTexto} className={`z-50 absolute bottom-0 grid place-items-center fundo-de-pergaminho w-full h-[300px] transicao-opacidade ${sumirCaixaDeTexto ? 'transicao-out' : 'transicao-in'}`}>
                        {aparecerTexto &&

                            <TypingAnimator
                                textArray={[
                                        'For four days you walked under the scorching sun of the desert.',
                                        'The water and three lizards that the royal entourage provided you before your departure ran out by the morning.',
                                        'Behind you, the kingdom is no longer visible. Ahead, only the endless desert.',
                                        'Hot.',
                                        'Cruel.',
                                        'Lonely.',
                                        'Your limits draw near. Your hope of being the one chosen by the gods to save the Kingdom and honor your Pharaoh is hanging by a thread, along with your strength to continue.',
                                        "That's when you see it.",
                                        "It's impossible not to see. It rises, almost shining, amidst the maddening monotony of the landscape.",
                                        'A stone pulpit, embedded in the sand. Strange inscriptions on its shape do not matter. Above it, lies an open book. The right page, blank. The left page, with the following inscriptions:',
                                        '“I keep the water. I keep life. Overcome my challenge, and live one more day to continue your quest.”',
                                        '',
                                        '',
                                ]}
                                cursorColor="#ffffff00"
                                textColor="#555"
                                fontSize="20px"
                                loop={false}
                                typingSpeed={60}
                                delaySpeed={2000}
                                backspace={false}
                                height="auto"
                                dynamicDelay={false}
                                style={{
                                    textAlign: 'center',
                                    fontFamily: 'Papyrus',
                                    fontWeight: 'bold',
                                    marginTop: '10px',
                                    caretColor: 'transparent',
                                    width: '600px',
                                }}
                            />

                        }
                        </div>
                }
                </>



                <div className={`z-0 relative top-0 left-0 w-full h-screen grid place-items-center transicao-opacidade ${sumirAsImagens ? 'transicao-out' : 'transicao-in'} `}>
                    <img id='problematic-pic' className={`w-[80%] z-0 absolute mx-auto top-[-300px] transicao-opacidade-imagens ${aparecerImagem1 ? 'transicao-in, mover-imagem1-pra-baixo' : 'transicao-out'} ${sumirImagem ? 'hidden' : ''} `} src={painel1Img} alt="Ilustração de um assustador e imenso deserto de areia sob um céu de sol forte cercado de tonalidades negras." />


                    <img className={`w-[90%] absolute z-10 scale-100 transicao-opacidade-imagens ${aparecerImagem2 ? 'transicao-in, crescer-imagem-2' : 'transicao-out'}`} src={painel2Img} alt="Ilustração de um viajante tapado por rústicos trapos cansadamente caminhando pelo deserto." />


                    <img className={`w-[80%] absolute right-[-200px] my-auto z-20 transicao-opacidade-imagens ${aparecerImagem3 ? 'transicao-in, mover-imagem3-pra-esquerda' : 'transicao-out'}`} src={painel3Img} alt="Ilustração de um púlpito de pedra com um livro aberto sobre si, no meio do deserto.." />
                </div>   




            </div>

            <div className='absolute bottom-5 right-5 z-50 pointer-events-auto'>
                <button onClick={pularCena1} className='z-50 text-white absolute bottom-20 right-20 fonte-papyrus bg-amber-600 p-4 rounded-lg font-bold pointer-events-auto opacity-20 border border-black hover:opacity-100'>
                    <>
                    {
                        language === 0 ?
                        'PULAR'
                        :
                        'SKIP'
                    }
                    </>
                
                </button>
            </div>
            
        </div>
    
    );
};

export default Cena1;