import React from 'react';
import {PokemonTypeText, PokemonTypeBodyCell} from './PokedexTypeStyle';

const PokedexType = (props: {
  index: any;
  pokemonTypeName?: string;
  isRow?: boolean;
  isDetail?: boolean;
}) => {
  const {index, isRow, pokemonTypeName, isDetail} = props;

  return (
    <PokemonTypeBodyCell
      key={index.toString()}
      isDetail={isDetail}
      isRow={isRow}>
      <PokemonTypeText isDetail={isDetail}>{pokemonTypeName}</PokemonTypeText>
    </PokemonTypeBodyCell>
  );
};

export default PokedexType;
