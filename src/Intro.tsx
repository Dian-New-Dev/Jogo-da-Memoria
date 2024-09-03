import React, { useEffect, useState } from 'react';

interface IntroProps {
    propParaIntro: boolean;
}

const Intro: React.FC<IntroProps> = ({propParaIntro}) => {

    const [comecarIntro, setComecarIntro] = useState <number> (-1) 

    useEffect(() => {
        setComecarIntro( prevState => prevState + 1)
        console.log('comeciou, e o valor de comecarIntro é: ' + comecarIntro)
      }, [propParaIntro]);

    return (
    
        <div id='paineis-container' className='w-full h-screen relative'>
            <div>
                <p>O Reino agoniza.</p>
            </div>
            
            <div>
                <img src={"./assets/images/prototype/Intro/painel1ap.jpg"} alt="Ilustração de um reino egípcio antigo com estruturas decaindo em ruínas. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                <p>Outrora o coração pulsante de nossa civilização, hoje ele apodrece moribundo sob o olhar indiferente dos deuses.</p>
            </div>
            

            <div>
                <img src={"./assets/images/prototype/Intro/painel2ap.jpg"} alt="Ilustração de pessoas raquíticas passando fome e sede nas ruas de um reino egípcio antigo um reino. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                <p>Sem água para matar a sede ou para cultivar o alimento de cada, o povo cadavérico e raquítico se aglomera em volta do palácio. Seus corpos morrem segundo após segundo, agarrando-se à esperança de que seu Faraó convencerá os deuses a lhes devolver o Nilo.</p>
            </div>
            
            <div>
                <img src={"./assets/images/prototype/Intro/painel3ap.jpg"} alt="Ilustração de um homem raquítico e cadavérico sentado no chão no interior de um escuro palácio egípcio, com outras pessoas cadavéricas sentadas ao fundo. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                <p>Mas mesmo nos corredores do palácio, a fome e a sede correm de mãos dadas com o fantasma da morte. De morte em morte, a corte do Faraó se desintegra. Mesmo o mais forte dos generais luta para se manter de pé sobre pernas finais, e até o mais brilhante dos escribas luta em vão contra a loucura.</p>
            </div>
            <div>
                <img src={"./assets/images/prototype/Intro/painel4ap.jpg"} alt="Ilustração de um cadavérico faraó observando seu reino do topo de seu palácio, enquanto uma sinistra figura esquelética faz o mesmo. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                <p>Sem opções, nosso Faraó tenta uma vez mais. Lhe escolhendo a dedo da multidão lá embaixo, sem critério outro que a confiança nos desígnios dos deuses, o faraó lhe encarrega, a um só passo, da mais nobre missão e da mais perversa das sentenças.</p>
            </div>
            <div>
                <img src={"./assets/images/prototype/Intro/painel5ap.jpg"} alt="Ilustração de solitário viajante desbravando o tórrido deserto egípcio. Estilo artístico de desenho à mão, aspecto sutilmente sinistro." />
                <p>Dezenove outros tentaram antes de você, nenhum retornou. Mas onde eles resistiram, apavorados, você aceitou com orgulho. Escolhido pelos deuses, você desbrava o deserto em busca de água.</p>
            </div>

            <div>
                <p>Você é o Vigésimo. {<br />} A última esperança do Reino.</p>
            </div>
        </div>
    
    );
};

export default Intro;