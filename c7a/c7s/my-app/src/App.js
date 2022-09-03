import React from "react";
import appStyle from './style.css';

let lista = ["HOLA", "HOLA", "HOLA", "MUNDO"];

class App extends React.Component {
  render() {
    return (
         <div style={{textAlign:"center",fontSize:"2rem"}} className="App">
            <h1>App</h1>
            {lista.map((item, index) => <p className={`h1${index}`} key={index}>{item}</p>)}
          </div>
    );
    
    
    
  }
}

export default App;