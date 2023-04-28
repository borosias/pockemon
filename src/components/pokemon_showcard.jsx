import React from 'react';


const PokemonShowcard = ({data}) => {
    const source = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
    const svg =".svg"
    return (
        <>
            {
                (!data) ? "" : (

                    <>
                        <div className="pokemon-showcard-layout">
                            <img
                                src={source+data.id+svg} alt=""/>
                            <h1>{data.name} #{data.id}</h1>
                            <table className="pokemon-show-stats">
                                <tr>
                                    <td>type:</td>
                                    <td>
                                        {
                                            data.types.map(slot=>{
                                                return(
                                                <h5>{slot.type.name}</h5>)
                                            })
                                        }
                                    </td>
                                </tr>

                                    {
                                        data.stats.map(poke=>{
                                            return(
                                                <>
                                                    <tr>
                                                <td>{poke.stat.name}:</td>
                                                <td>{poke.base_stat}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                <tr>
                                    <td>weight:</td>
                                    <td>{data.weight}</td>
                                </tr>
                                <tr>
                                    <td>total moves:</td>
                                    <td>{data.moves.length}</td>
                                </tr>

                            </table>
                        </div>
                    </>
                )
            }

        </>
    );
};


export default PokemonShowcard;