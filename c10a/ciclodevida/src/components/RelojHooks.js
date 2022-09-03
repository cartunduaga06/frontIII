import { useState, useEffect } from "react";
import Reloj from ".//reloj";


const RelojHook = () => {
    const [hora, setHora] = useState(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        setHora(new Date().toLocaleTimeString());
        console.log("useEffect: se monto el reloj hook");
    },[]);
// mandar los estados que useEffect va a recibir para que se ejecute solo cuando cambien
    
    useEffect(() => {
       let temporizador;
         if (visible) {
                temporizador = setInterval(() => {
                    setHora(new Date().toLocaleTimeString());
                }, 1000);
            } else {
                clearInterval(temporizador);
            }
    },[visible]);


return (
        <div>

            <h2>Reloj</h2>
            {visible && <Reloj hora={hora} />}
            <button onClick={() => setVisible(true)}> Iniciar</button>
            <button onClick={() => setVisible(false)}> Parar</button>
            </div>)
}

export default RelojHook;