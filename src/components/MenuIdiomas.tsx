import React from 'react';
import brasilIcon from '../assets/images/icons/brasil.png';
import ukIcon from '../assets/images/icons/uk.png'

interface MenuIdiomaProps {
    setLanguage: React.Dispatch<React.SetStateAction<number>>;
    setMenuIdiomas: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuIdiomas: React.FC<MenuIdiomaProps> = ( {setLanguage, setMenuIdiomas} ) => {


    function idioma(lingua:string) {
        if (lingua === 'pt') {
            setLanguage(0)
        } else {
            setLanguage(1)
        }
        setMenuIdiomas(false)
    }

    return (
    
        <div className='w-full h-full grid place-items-center bg-black z-50 relative'>
            <div className='flex gap-2'>
                <button onClick={() => idioma('pt')}>
                    <img className='w-[50px] opacity-[0.5] hover:opacity-[1] hover:scale-[1.1]' src={brasilIcon} alt="Ícone de bandeira do Brasil" />
                </button>

                <button onClick={() => idioma('en')}>
                    <img className='w-[50px] opacity-[0.5] hover:opacity-[1] hover:scale-[1.1]' src={ukIcon} alt="Ícone de bandeira do Brasil" />
                </button>

            </div>
        </div>
    
    );
};

export default MenuIdiomas;