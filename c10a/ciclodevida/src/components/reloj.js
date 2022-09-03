import { useEffect, useState } from "react";

const Reloj = ({hora}) => {


    useEffect(() => {
        console.log("useEffect: se monto el reloj componente hijo");
        return (() => {
            console.log("se elimino el reloj");
        })
    },[]);

    return (
        
        <div className="reloj">
            <h2>{hora}</h2>
        </div>
    )
}

export default Reloj;