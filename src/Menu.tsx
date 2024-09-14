import React from 'react';
import TypingAnimator from 'react-typing-animator';


const Menu: React.FC = () => {
        
    return (
    
        //<div className='text-white grid place-items-center w-full h-screen'>
                    <TypingAnimator
                        textArray={['Estamos no Menu!!', 'agora vamos lá', 'aiaiaia']}
                        cursorColor="transparent"
                        textColor="#555"
                        fontSize="24px"
                        loop={false}
                        typingSpeed={100}
                        delaySpeed={8000}
                        backspace={false}
                        height="60px"
                        dynamicDelay={true}
                        style={{fontFamily: "Helvetica" , fontWeight: "bold", marginTop: "10px"}}
                    />
            
            
        //</div>
    
    );
};

export default Menu;