const pokemonCard = (props) => {
  const {
    pokemonName,
    life,
    defense,
    specialAttack,
    specialDefense,
    image,
    firstMoveName,
    secondMoveName,
    height,
    width,
  } = props.props;

  console.log(pokemonName);

  return (
    <div className="pokemonCard">
      <div className="pokemonImageContainer">
        <img src={image} alt="pokemon" />
      </div>

      <div className="allPokemonInfo">
        <div className="pokemonDetails">
          <div className="name">
            <p>Name:</p>
            <p>{pokemonName}</p>
          </div>
          <div className="life">
            <p>Life:</p>
            <p>{life}</p>
          </div>
          <div className="defense">
            <p>Defense:</p>
            <p>{defense}</p>
          </div>
          <div className="specialAttack">
            <p>Special Attack:</p>
            <p>{specialAttack}</p>
          </div>
          <div className="specialDefense">
            <p>Special Defense:</p>
            <p>{specialDefense}</p>
          </div>
          <div className="firstAtackName">
            <p>Primary Attack:</p>
            <p>{firstMoveName}</p>
          </div>
          <div className="secondAtackName">
            <p>Secondary Attack:</p>
            <p>{secondMoveName}</p>
          </div>
        </div>
        <div className="miscelaniosInfos">
          <div className="height"> <p>Height: </p><p>{height}</p></div>   
          <div className="width"><p>Width:</p> <p>{width}</p> </div>
           
        </div>
      </div>
    </div>
  );
};

export default pokemonCard;
