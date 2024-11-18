import React, { useState, useEffect, useRef } from 'react';
import IntroSequence from './IntroSequence';
import Menu from '../components/Menu';
import GameLogic from './GameLogic';
import Cena1 from './Cena1';
import DescricaoDasCartas from './DescricaoDasCartas';

import ventoAudio from '../assets/audio/music/menu.mp3'
import MenuIdiomas from './MenuIdiomas';



const App: React.FC = () => {
    
    //logica idioma
    const [menuIdiomas, setMenuIdiomas] = useState<boolean>(true) // padrao: true
    const [language, setLanguage] = useState<number>(0); // 0 = pt / 1 = en



    const [mostrarIntroSequence, setMostrarIntroSequence] = useState <boolean> (true) // padrao: true
    const [comecarCena1, setComecarCena1] = useState <boolean> (false) // padrao: false
    const [faseAtual, setFaseAtual] = useState <number> (0) // padrao: 0 //
    const [renderizarGameLogic, setRenderizarGameLogic] = useState <boolean> (false) // padrao: false
    const [renderizarDescricaoDasCartas, setRenderizarDescricaoDasCartas] = useState <boolean> (false) // padrao: false
    const [indexA, setIndexA] = useState <number> (-2); // padrao: -2
    const [indexB, setIndexB] = useState <number> (-1); // padrao: -1


    //gamelogic: f, f, 1, t, f, -2, -1,
    //descricao cartas: f, f, 1, t, 0, 1

    //musica cena1
    const ventoRef = useRef<HTMLAudioElement | null>(null);
    
    const tocarVento = () => {
        if (comecarCena1) {
            ventoRef.current?.play(); // Usa optional chaining
        }
    }
    
    useEffect(() => { 
        if (comecarCena1) {
            tocarVento();
        } else {
            ventoRef.current?.pause(); // Usa optional chaining
        }
    }, [comecarCena1]);
    
    
    return (

        <div className='relative w-full h-screen overflow-hidden'>

            {menuIdiomas && <MenuIdiomas setLanguage={setLanguage} setMenuIdiomas={setMenuIdiomas} />}

            <div id='intro' className={`text-white absolute top-0 left-0 w-full h-screen ${mostrarIntroSequence ? 'visible' : 'hidden'} `}>
                {mostrarIntroSequence && <IntroSequence setMostrarIntroSequence={setMostrarIntroSequence}/>}
            </div>

            <div id="menu-outer-container" className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${mostrarIntroSequence ? 'hidden' : 'visible'} `}>
                {!mostrarIntroSequence && !comecarCena1 && faseAtual === 0 && !menuIdiomas && <Menu setComecarCena1={setComecarCena1} />}
            </div>

            <audio ref={ventoRef} src={ventoAudio} onEnded={tocarVento}></audio>

            <div className={`z-0 absolute top-0 left-0 w-full h-screen text-white ${comecarCena1 ? 'visible' : 'hidden'} `}>
                {comecarCena1 && <Cena1 setComecarCena1={setComecarCena1} setFaseAtual={setFaseAtual} setRenderizarGameLogic={setRenderizarGameLogic} />}
            </div>

            <div className={`z-50 absolute top-0 left-0 w-full h-screen text-white ${faseAtual !== 0 ? 'visible' : 'hidden'} `}>
                {faseAtual !== 0 && renderizarGameLogic && <GameLogic faseAtual={faseAtual} setFaseAtual={setFaseAtual} setRenderizarGameLogic={setRenderizarGameLogic} setRenderizarDescricaoDasCartas={setRenderizarDescricaoDasCartas} setIndexA={setIndexA} setIndexB={setIndexB} />}
            </div>

            <div className={`z-50 absolute top-0 left-0 w-full h-screen text-white ${renderizarDescricaoDasCartas ? 'visible' : 'hidden'} `}>
                {renderizarDescricaoDasCartas && <DescricaoDasCartas faseAtual={faseAtual} indexA={indexA} indexB={indexB} setRenderizarDescricaoDasCartas={setRenderizarDescricaoDasCartas} setRenderizarGameLogic={setRenderizarGameLogic} />}
            </div>
        </div>
    );
};

export default App;