import React from 'react';


const Menu: React.FC = () => {
        
    return (
    <div id='menu-container' className='w-full h-screen flex flex-col items-center justify-evenly gap-16 background-menu'>
        <div className='text-amber-400 fonte-headline text-[250px] m-0'>
            <h1>O Vigésimo</h1>
        </div>

        <div className='fonte-papyrus text-amber-200 text-lg font-bold'>
            <ul className='flex flex-col gap-4'>
                <li className='cursor-pointer hover:scale-125'>Novo Jogo</li>
                <li className='cursor-pointer hover:scale-125'>Carregar Jogo</li>
                <li className='cursor-pointer hover:scale-125'>Opções</li>
            </ul>
        </div>

        <div className=''>
            2024 - DA Web Dev.
        </div>
    </div>
    );
};

export default Menu;