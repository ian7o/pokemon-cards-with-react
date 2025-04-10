const pokemonCard = (props) => {
  const {
    pokemonName,
    life,
    image,
    firstMoveName,
    secondMoveName,
    height,
    width,
  } = props.props;

  console.log(pokemonName);

  return (
    <div className="pokemonCard">
      <div className="nameAndlife">
        <div className="name">Name:{pokemonName}</div>
        <div className="life">Life:{life}</div>
      </div>
      <div className="pokemonImageContainer">
        <img src={image} alt="pokemon" />
      </div>
      <div className="allPokemonInfo">
        <div className="atacksNameAndDmg">
          <div className="firstAtackName">Primary atack: {firstMoveName}</div>
          <div className="secondAtackName">
            Secundary atack: {secondMoveName}
          </div>
        </div>
        <div className="miscelaniosInfos">
          <p>
            Height: {height}
            <br />
            Width: {width}
          </p>
        </div>
      </div>
    </div>
  );
};

export default pokemonCard;
