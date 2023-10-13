  function PokemonCard({pokemonList}) {
    const pokemon = pokemonList[0]

    console.log(pokemonList)
    return (
        <figure>        
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
        <figcaption>{pokemon.name}</figcaption>        
        </figure>
    );
}


export default PokemonCard;