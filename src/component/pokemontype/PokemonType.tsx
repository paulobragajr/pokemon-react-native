import React from 'react';
import {PokemonTypeText, PokemonTypeBodyCell} from './PokemonTypeStyle';

const PokemonType = (props: {
  index: any;
  pokemonTypeName?: string;
  isRow?: boolean;
  isDetail?: boolean;
}) => {
  const {index, isRow, pokemonTypeName, isDetail} = props;

  return (
    <PokemonTypeBodyCell isDetail={isDetail} isRow={isRow} key={index}>
      <PokemonTypeText isDetail={isDetail}>{pokemonTypeName}</PokemonTypeText>
    </PokemonTypeBodyCell>
  );
};

export default PokemonType;
