import React from 'react';

const PokemonShowcard = () => {
    return (
        <div className="pokemon-showcard-layout">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"  alt=""/>
            <h1>Pikachu #025</h1>
            <table className="pokemon-show-stats">
                <tr>
                    <td>Type:</td>
                    <td>Fire</td>
                </tr>
                <tr>
                    <td>Attack:</td>
                    <td>35</td>
                </tr>
                <tr>
                    <td>Defense:</td>
                    <td>53</td>
                </tr>
                <tr>
                    <td>Special-attack:</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>Speed:</td>
                    <td>47</td>
                </tr>
                <tr>
                    <td>Weight:</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>Total moves:</td>
                    <td>89</td>
                </tr>

            </table>
        </div>
    );
};


export default PokemonShowcard;