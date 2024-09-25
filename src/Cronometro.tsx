import React, { useState, useEffect } from "react";

interface CronometroProps {
    jogadorPreparado: boolean;
    venceuDesafioAtual: boolean;
    setTempoFinalDoDesafio: React.Dispatch<React.SetStateAction<string>>;
}

const Cronometro: React.FC<CronometroProps> = ({jogadorPreparado, venceuDesafioAtual, setTempoFinalDoDesafio}) => {
        
// state to store time
const [time, setTime] = useState(0);

// state to check stopwatch running or not
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null; // Declare como null inicialmente
    if (isRunning) {
    // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
        intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => {
        if (intervalId) {
            clearInterval(intervalId); // Limpe apenas se intervalId não for null
        }
    };
}, [isRunning, time]);

useEffect(() => {
    if (jogadorPreparado) {
        setIsRunning(true)
    } 
    if (venceuDesafioAtual) {
        const timeString = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
        setTempoFinalDoDesafio(timeString)
        setIsRunning(false) 
    }
}, [jogadorPreparado, venceuDesafioAtual])

// Hours calculation
const hours = Math.floor(time / 360000);

// Minutes calculation
const minutes = Math.floor((time % 360000) / 6000);

// Seconds calculation
const seconds = Math.floor((time % 6000) / 100);

// Milliseconds calculation
const milliseconds = time % 100;

// Começar e parar temporizador
// function startAndStop() {
//     setIsRunning(!isRunning);
// };

// // Resetar temporizador
// function reset () {
//     setTime(0);
// };

return (
    <div className="absolute top-4 mx-auto">
        <p className='fonte-papyrus text-5xl text-red-700 contorno-de-texto font-bold'>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
        </p>
    </div>
    );
};

export default Cronometro;

//Adaptado de: https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e