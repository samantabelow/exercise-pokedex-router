import React from 'react'

class PokemonDetails extends React.Component {
    render() {
        const { id } = this.props.match.params;
        const idNumber = Number(id);
        const { pokemons } = this.props;
        const pokemon = pokemons.find((pokemon) => pokemon.id === idNumber);
        return(
            <div>
                <p>Pokemon: {pokemon.name}</p>
                <p>Tipo: {pokemon.type}</p>
                <p>Peso: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                <p>Sumário: {pokemon.summary}</p>
                {pokemon.foundAt.map((obj) => 
                    <img src={obj.map} alt={obj.location} key={obj.location} />
                )}
            </div>
        )
    }
}

export default PokemonDetails;