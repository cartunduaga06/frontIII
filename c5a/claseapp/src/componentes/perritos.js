import React from "react";

class Perritos extends React.Component {
  render() {
    return (
      <div>
        <h1>Nombre: {this.props.nombre} </h1>
        <ul>
          <li> Edad: {this.props.edad} </li>
          <li> sexo: {this.props.sexo} </li>
          <li> raza: {this.props.raza} </li>
          <li> Tamaño: {this.props.tamanio} </li>
        </ul>
      </div>
    );
  }
}

export default Perritos;
