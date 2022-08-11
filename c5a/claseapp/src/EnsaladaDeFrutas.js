import React from "react";
import Fruta from "./componentes/frutas"

class EnsaladaDeFrutas extends React.Component {
    render() {
        return (<div>

                <ul>
                    <Fruta fruta="Manzana"></Fruta>
                    <Fruta fruta="pera"/>

                </ul>
            </div>)
        
    }
}

export default EnsaladaDeFrutas;