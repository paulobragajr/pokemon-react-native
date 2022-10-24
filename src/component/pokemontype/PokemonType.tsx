import React from 'react';
import {PokemonTypeText, PokemonTypeBodyCell} from './PokemonTypeStyle';

const PokemonType = (props: {
  index: any;
  pokemonTypeName?: string;
  isRow?: boolean;
  isBlackText?: boolean;
}) => {
  const {index, isRow, pokemonTypeName, isBlackText} = props;

  return (
    <PokemonTypeBodyCell isRow={isRow} key={index}>
      <PokemonTypeText isBlackText={isBlackText}>
        {pokemonTypeName}
      </PokemonTypeText>
    </PokemonTypeBodyCell>
  );
};

export default PokemonType;
