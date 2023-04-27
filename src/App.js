import './App.css';
import PokemonList from "./components/pokemon_list";

function App() {
  return (
    <div className="App">
      <h1 className="title">
          Pokedex
      </h1>
        <PokemonList/>
    </div>
  );
}

export default App;
