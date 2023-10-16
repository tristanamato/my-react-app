  function PokemonCard({pokemonList, pokemonIndex}) {
    const pokemon = pokemonList[pokemonIndex]

    console.log(pokemonList)
    return (
        <figure>        
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
        <figcaption>{pokemon.name}</figcaption>        
        </figure>
    );
}


export default PokemonCard;