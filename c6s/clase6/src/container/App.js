import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";
import "../styles/App.css";
import Container  from "../components/container";
import ContainerF from "../components/containerF";

function App() {

  const heroes = [
    {id: 1 , name: "Batman", origin: "DC"},
    {id: 2 , name: "Superman", origin: "DC"},
    {id: 3 , name: "Flash", origin: "DC"},
    {id: 4 , name: "Spiderman", origin: "Marvel"},
    {id: 5 , name: "Ironman", origin: "Marvel"},
    {id: 6 , name: "Thor", origin: "Marvel"},
    {id: 7 , name: "Hulk", origin: "Marvel"},
    {id: 8 , name: "Wolverine", origin: "Marvel"},
    {id: 9 , name: "Deadpool", origin: "Marvel"},
    {id: 10 , name: "Captain America", origin: "Marvel"},
    {id: 11 , name: "Black Panther", origin: "Marvel"},
    {id: 12 , name: "Doctor Strange", origin: "Marvel"},
    {id: 13 , name: "Daredevil", origin: "Marvel"},
    {id: 14 , name: "Captain Marvel", origin: "Marvel"},
    {id: 15 , name: "Black Widow", origin: "Marvel"}
  ]


  return (
    <div className="App">

      
      <h1>App</h1>
      <h3>Invitados</h3>
      <ClassComponent nombre="Nicolas" estaEnLista={true} />
      <ClassComponent nombre="Ivan" estaEnLista={false} />
      <ClassComponent nombre="Carolina" estaEnLista={true} />
      <ClassComponent nombre="Esteban" estaEnLista={false}/>

      <h3>Tareas:</h3>
      <FunctionComponent nombre="Nicolas" tarea="papas fritas" />
      <FunctionComponent nombre="Ivan" tarea="pizzas" />
      <FunctionComponent nombre="Carolina" tarea="bebidas" />
    
    
      <h3>Heroes:</h3>
      <>
        <Container/>
        <ContainerF  heroes={heroes}/>
      </>
    </div>


    
  );
}

export default App;
