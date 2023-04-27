import React, {useState} from 'react';
import Axios from "axios"
import PokemonTemplate from "./pokemon_template";
import PokemonShowcard from "./pokemon_showcard";

const PokemonList = () => {
    const [list, setList] = useState([]);
    const [load,setLoad] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    return (
        <div className="container">
            <div className="pokemon-list">
                <PokemonTemplate/>
                <PokemonTemplate/>
                <PokemonTemplate/>
                <PokemonTemplate/>
                <PokemonTemplate/>
                <PokemonTemplate/>
                <div className="button-placement">
                    <button onClick={() => alert("pokemooons")} >Load More</button>
                </div>
            </div>
            <div className="pokemon-show">
                <PokemonShowcard/>
            </div>
        </div>
    );
};

export default PokemonList;