import React from "react";
import "./index.css";
import Heroe from "../Heroe";

const ContainerF = ({ heroes }) => {
  return (
    <>
      <div className="container">
        <h2>Bienvenidos</h2>
        {heroes.map((heroe) => (
          <Heroe key={heroe.id} name={heroe.name} origin={heroe.origin} />
        ))}
      </div>
    </>
  );
};

export default ContainerF;
