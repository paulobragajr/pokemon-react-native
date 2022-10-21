import React from 'react';

import {
  BodyCell,
  PokeDexImageCell,
  PokemonImageCell,
  PokemonName,
  PokemonTypeText,
  PokemonTypeBodyCell,
} from './PokemonCellStyle';

const PokemonCell = (props: {pokemon: any}) => {
  const {pokemon} = props;

  return (
    <BodyCell weaknesses={pokemon.type}>
      <PokemonName>{pokemon.name}</PokemonName>
      {pokemon.type.map((pokemonType: string, index: any) => {
        return (
          <PokemonTypeBodyCell key={index}>
            <PokemonTypeText>{pokemonType}</PokemonTypeText>
          </PokemonTypeBodyCell>
        );
      })}

      <PokeDexImageCell />
      <PokemonImageCell source={{uri: pokemon.img}} />
    </BodyCell>
  );
};

export default PokemonCell;
