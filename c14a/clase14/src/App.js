
import './App.css';
import {useEffect} from 'react'
import {useState} from 'react'

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon/ditto"

  const [pokemon, setPokemon] = useState(null)
  const [imagen, setImagen] = useState(null)


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)  
        setImagen(data.sprites.front_default)
      }).catch(err => {
        console.log(err)
      }
      )
  } , [setImagen])


  

  return (
    <div className='App'>
      
    {/* <h1> Pokemon {pokemon.species.name}</h1> */}
      <img src={imagen} alt=""/>
    
      < button onClick = {()=>{setImagen(pokemon.sprites.back_default)}}>Click</button>
      
      

    </div>
  );
}

export default App;
