import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PokemonCard from "./PokemonCard";

let pokemonVariablesiables = {
  moves: "atack1",
  pokemonName: "Hitmonlee",
  life: 50,
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
      <div>
        <PokemonCard props={pokemonVariablesiables} />
      </div>
    </>
  );
}

export default App;
