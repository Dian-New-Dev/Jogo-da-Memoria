import React, { useEffect, useState } from 'react';
import TypingAnimator from 'react-typing-animator';

import painel1ap from '../assets/images/intro/painel1ap.jpg';
import painel2ap from '../assets/images/intro/painel2ap.jpg';
import painel3ap from '../assets/images/intro/painel3ap.jpg';
import painel4ap from '../assets/images/intro/painel4ap.jpg';
import painel5ap from '../assets/images/intro/painel5ap.jpg';

interface IntroProps {
    propParaIntro: boolean;
}

const Intro: React.FC<IntroProps> = ({propParaIntro}) => {

    //começar a intro e aparecer primeiro texto
    const [comecarIntro, setComecarIntro] = useState <number> (-1)
    
    //aparecer primeira imagem
    const [aparecerImagem1, setAparecerImagem1] = useState <boolean> (false)
    const [aparecerTexto, setAparecerTexto] = useState <boolean> (false);
    
    useEffect(() => {
        setComecarIntro( prevState => prevState + 1)
    }, [propParaIntro]);

   
    useEffect(() => {
        if (comecarIntro >= 1) {
            const timer = setTimeout(() => {
                setAparecerImagem1(true);
                setAparecerTexto(true);
                avancar1();
            }, 2000);
    
            return () => clearTimeout(timer);  // Cleanup timeout
        }
    }, [comecarIntro]);
    
    
    //aparecer proximos textos e imagens
    // const [textoIndex, setTextoIndex] = useState <number> (0);
    const [aparecerImagem2, setAparecerImagem2] = useState <boolean> (false)
    const [aparecerImagem3, setAparecerImagem3] = useState <boolean> (false)
    const [aparecerImagem4, setAparecerImagem4] = useState <boolean> (false)
    const [aparecerImagem5, setAparecerImagem5] = useState <boolean> (false)
    const [sumirAsImagens, setSumirAsImagens] = useState <boolean> (false)
    const [sumirCaixaDeTexto, setSumirCaixaDeTexto] = useState <boolean> (false)

    function avancar1() {
        setTimeout(() => {
            // setTextoIndex(1)

            setTimeout(() => {
                avancar2();
            }, 4000);
        }, 1000);
    }

    function avancar2() {
        setTimeout(() => {
            // setTextoIndex(2)
            setAparecerImagem2(true)
        }, 1000);
    }

    function avancar3() {
        setTimeout(() => {
            // setTextoIndex(3)
            setAparecerImagem3(true)
            
        }, 15000);
    }

    function avancar4() {
        setTimeout(() => {
            // setTextoIndex(4)
            setAparecerImagem4(true)
        }, 16000);
    }

    function avancar5() {
        setTimeout(() => {
            // setTextoIndex(5)
            setAparecerImagem5(true)
        }, 16000);
    }

    function avancar6() {
        setTimeout(() => {
            setSumirAsImagens(true)
            setTimeout(() => {
                setSumirCaixaDeTexto(true);
            }, 2000)
        }, 28000);
    }

    // function terminarIntroePassarAoMenu() {
    //     setTimeout(() => {
    //         setMostrarIntroSequence(false);
    //     }, 5000)
        
    // }
    
    return (
    
        <div id='paineis-container' className='w-full h-screen relative fonte-papyrus text-gray-800 text-lg font-bold'>

                <div id="fundo-pergaminho" className={`z-50 absolute bottom-0 grid place-items-center fundo-de-pergaminho w-full h-[300px] transicao-opacidade ${sumirCaixaDeTexto ? 'transicao-out' : ''}`}>
                    {/* <p 
                    className={`w-[600px] text-center transicao-opacidade ${textoIndex !== 0 ? '' : ''}`}>
                        
                        
                        {textoIntro[textoIndex]}
                        </p> */}

                    {aparecerTexto &&

                        <TypingAnimator
                        textArray={[
                                'O Reino agoniza.',
                                'Outrora o coração pulsante de nossa civilização, hoje ele apodrece moribundo sob o olhar indiferente dos deuses.',
                                'Sem água para matar a sede ou para cultivar o alimento de cada dia, o povo cadavérico e raquítico se aglomera em volta do palácio. Seus corpos morrem segundo após segundo, escorando-se apenas na esperança de que o Faraó convencerá os deuses a lhes devolver o Nilo.',
                                'Mas mesmo nos corredores do palácio, a fome e a sede passeiam de mãos dadas com o fantasma da morte. De óbito em óbito, a corte real se desintegra. Mesmo os fortes generais mal conseguem se manter de pé sobre pernas finas, e até o mais brilhante dos escribas luta contra a loucura.',
                                'Sem opções, o Deus-Sol tenta uma última vez. Lhe escolhendo a dedo da multidão lá embaixo, sem critério outro que não a confiança nos desígnios dos deuses, o Faraó lhe encarrega, a um só passo, da mais nobre das missões e da mais perversa das sentenças.',
                                'Dezenove outros tentaram antes de você, nenhum retornou. Mas onde eles resistiram, apavorados, você aceitou com orgulho.',
                                'Escolhido pelos deuses, você desbrava o deserto em busca de água.',
                                'Pelo Reino.',
                                'Pelo Faraó.',
                                'Você é o Vigésimo. A última esperança do seu povo.'
                        ]}
                        cursorColor="#ffffff00"
                        textColor="#555"
                        fontSize="20px"
                        loop={false}
                        typingSpeed={60}
                        delaySpeed={3000}
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
                
                

            
            <div className={`z-0 relative top-0 left-0 w-full h-screen grid place-items-center transicao-opacidade ${sumirAsImagens ? 'transicao-out' : ''} `}>
                <img onTransitionEnd={avancar1} className={`w-[80%] z-0 transicao-opacidade-imagens ${aparecerImagem1 ? 'transicao-in' : 'transicao-out'}`} src={painel1ap} alt="Ilustração de um reino egípcio antigo com estruturas decaindo em ruínas. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                

                <img onTransitionEnd={avancar3} className={`w-[50%] absolute z-10 transicao-opacidade-imagens ${aparecerImagem2 ? 'transicao-in' : 'transicao-out'}`} src={painel2ap} alt="Ilustração de pessoas raquíticas passando fome e sede nas ruas de um reino egípcio antigo um reino. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                

                <img onTransitionEnd={avancar4} className={`w-[50%] absolute left-[5%] bottom-[30%] z-20 transicao-opacidade-imagens ${aparecerImagem3 ? 'transicao-in' : 'transicao-out'}`} src={painel3ap} alt="Ilustração de um homem raquítico e cadavérico sentado no chão no interior de um escuro palácio egípcio, com outras pessoas cadavéricas sentadas ao fundo. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />

                

                <img onTransitionEnd={avancar5} className={`w-[60%] absolute right-[5%] top-0 z-30 transicao-opacidade-imagens ${aparecerImagem4 ? 'transicao-in' : 'transicao-out'}`} src={painel4ap} alt="Ilustração de um cadavérico faraó observando seu reino do topo de seu palácio, enquanto uma sinistra figura esquelética faz o mesmo. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                


                <img onTransitionEnd={avancar6} className={`w-[60%] absolute top-0 mx-auto z-40 transicao-opacidade-imagens ${aparecerImagem5 ? 'transicao-in' : 'transicao-out'}`} src={painel5ap} alt="Ilustração de solitário viajante desbravando o tórrido deserto egípcio. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
            </div>   




        </div>
    
    );
};

export default Intro;
