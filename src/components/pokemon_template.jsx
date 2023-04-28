import React from 'react';

const PokemonTemplate = ({pokemonInfo, loading,infoPokemon}) => {
    document.getElementsByClassName("pokemon-showcard-layout")
    return (
        <>
        {
            loading ? <h2>Loading...</h2>:
                pokemonInfo.map((item) => {
                    return (
                <>
                        <div className="pokemon-template" key={item.id} onClick={()=>infoPokemon(item)}>
                            <img
                                src={item.sprites.front_default}
                                alt=""/>
                            <h2>{item.name}</h2>
                            <div className="pokemon-type">
                                { item.types.map(slot=>{
                                    return(
                                        <span>{slot.type.name} </span>
                                    )
                                })}
                            </div>
                        </div>
                        </>

                    )

                })
        }</>

    );
};

export default PokemonTemplate;