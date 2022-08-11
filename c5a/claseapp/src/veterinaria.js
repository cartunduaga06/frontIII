import React from "react";
import Perro from "./componentes/perritos"

class Veterinaria extends React.Component {
    render() {
        return (<div>
                <h1 style={{color:"red"}}>Veterinaria DH</h1>
                <ul>
                    <Perro  nombre="miguel" edad="1" sexo="M" raza="criollo" tamanio="pequeño"/>

                </ul>
            </div>)
        
    }
}

export default Veterinaria;