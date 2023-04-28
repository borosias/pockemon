import React, {useEffect, useState} from 'react';
import Axios from "axios"
import PokemonTemplate from "./pokemon_template";
import PokemonShowcard from "./pokemon_showcard";

const PokemonList = () => {
    const [pokemonData,setPokemonData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/?limit=9")
    const [nextUrl,setNextUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokemonGo=async()=>{
        setLoading(true)
        const res=await Axios.get(url);
        setNextUrl(res.data.next);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await Axios.get(item.url)
            setPokemonData(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokemonGo();
    }, [url]);
    return (
        <>
        <div className="container">
            <div className="pokemon-list">
                <PokemonTemplate pokemonInfo={pokemonData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                <div className="button-placement">
                    { nextUrl && <button onClick={()=>{
                        setPokemonData([])
                        setUrl(nextUrl)
                        setPokeDex(null)

                    }}>Load More</button>}
                </div>
            </div>
            <div className="pokemon-show">
                <PokemonShowcard data={pokeDex}/>
            </div>
        </div>
            </>
    );
};

export default PokemonList;