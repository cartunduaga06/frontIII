import logo from './logo.svg';
import './App.css';
import Button from './/components//Button';
import RelojHook  from './components/RelojHooks';
function App() {
  
  const handleclick = (e, texto) => {
    console.log(e.target);
    alert(texto);
    console.log(e.nativeEvent)
  }
  
  
  return (
    <div className="App">
      <h1> HOLA</h1>

      <button onClick={(e)=>{handleclick(e, "hola mundo")}}>Click</button>
      <Button click={(e)=>{handleclick(e, "hola mundo componente")}}>Click</Button>

      <RelojHook />
      

    </div>
  );
}

export default App;
