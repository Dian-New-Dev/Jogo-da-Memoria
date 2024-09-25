import React, { useState, useEffect, useRef } from 'react';
import Presents from './Presents';
import Intro from './Intro';

interface setMostrarIntroSequenceProp {
    setMostrarIntroSequence: React.Dispatch<React.SetStateAction<boolean>>;
}

const Disclaimer: React.FC<setMostrarIntroSequenceProp> = ({ setMostrarIntroSequence }) => {

    const [clicouEmJogar, setClicouEmJogar] = useState <boolean> (false);
    const [terminarDisclaimer, setTerminarDisclaimer] = useState <boolean> (false);
    const [aparecerPresents, setAparecerPresents] = useState <boolean> (false)
    const [aparecerIntro, setAparecerIntro] = useState <boolean> (false)
    const [propParaIntro, setPropParaIntro] = useState <boolean> (false)

    useEffect (() => {
        if (clicouEmJogar) {
            setTimeout(function() {
                setTerminarDisclaimer(true)
            }, 2000);
            playAudio();
        }
    }, [clicouEmJogar])

    function tonarPresentsVisivel() {
        setAparecerPresents(true);
    }

    function tonarPresentsInvisivel() {
        setAparecerPresents(false);

        setTimeout(function() {
            tornarIntroVisivel()
        }, 2000)
    }

    function tornarIntroVisivel() {
        setAparecerIntro(true)
        setTimeout(function() {

        }, 2000)
    }

    function PassarPropParaIntro() {
        setPropParaIntro(true)

    }

    //CÓDIGO PARA MANIPULAR AUDIO

    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    } 

    function terminarIntroePassarAoMenu() {
        setMostrarIntroSequence(false)
    }

    return (
    
        <div>
            <div onTransitionEnd={tonarPresentsVisivel} className={`w-full h-screen grid place-items-center transicao-opacidade ${clicouEmJogar ? 'transicao-out' : '' } ${terminarDisclaimer ? 'hidden' : ''}`}>
                <div className='flex flex-col gap-2 text-center max-w-[300px]'>
                    <p className='text-2xl text-red-600 font-bold'>AVISO</p>
                    <p>O jogo a seguir se trata de uma obra de ficção, a qual aborda 
                        temas adultos potencialmente sensíveis para determinados 
                        indivíduos (violência, existencialismo, suicídio). Ao clicar
                        em jogar, o usuário declara estar ciente.
                    </p>
                    <button onClick={ () => setClicouEmJogar(true)} className='w-32 mx-auto m-2 p-2 bg-amber-600/75 hover:bg-amber-700 rounded-3xl'>JOGAR</button>
                </div>
            </div>

            <div id='presents' onTransitionEnd={tonarPresentsInvisivel} className={`absolute top-0 left-0 w-full h-screen grid place-items-center transicao-opacidade pointer-events-none ${aparecerPresents ? 'transicao-in' : 'transicao-out'}`}>
                <Presents />
            </div>

            <div id='intro' onTransitionEnd={PassarPropParaIntro} className={`absolute top-0 left-0 w-full h-screen grid place-items-center transicao-opacidade opacity-0 pointer-events-none ${aparecerIntro ? 'transicao-in' : 'transicao-out'}`}>
                <Intro propParaIntro={propParaIntro}/>
            </div>

            <button onClick={terminarIntroePassarAoMenu} className='z-50 text-white absolute bottom-20 right-20 fonte-papyrus bg-amber-600 p-4 rounded-lg font-bold opacity-30 hover:opacity-100'>Pular</button>

            <audio ref={audioRef} src={"./assets/audio/music/intro.mp3"} onEnded={terminarIntroePassarAoMenu}></audio>

        </div>


    
    );
};

export default Disclaimer;