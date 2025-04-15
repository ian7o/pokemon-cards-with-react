import "./App.css";

import PokemonCard from "./PokemonCard";

let pokemonVariables = {
  moves: "atack1",
  pokemonName: "Hitmonlee",
  life: 50,
  defense:89,
  specialAttack:140,
  specialDefense:200,
  type: "fighting",
  image:
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  firstMoveName: "limber",
  secondMoveName: "reckles",
  inputTextPokemon: "para depois",
  height: "50kg",
  width: "60 pounds",
};

function App() {
  return (
    <>
      <PokemonCard props={pokemonVariables} />
    </>
  );
}

export default App;
