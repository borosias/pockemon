import React from 'react';

const PokemonTemplate = () => {
    return (
        <div className="pokemon-template">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt=""/>
            <h2>Pikachu</h2>
            <div className="pokemon-type">
                Electric
            </div>
        </div>
    );
};

export default PokemonTemplate;