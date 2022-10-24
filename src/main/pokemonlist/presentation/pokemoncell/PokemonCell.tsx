import React from 'react';
import PokemonType from '../../../../component/pokemontype/PokemonType';

import {
  BodyCell,
  PokeDexImageCell,
  PokemonImageCell,
  PokemonName,
  PokemonTypeText,
  PokemonTypeBodyCell,
  ButtonContainer,
} from './PokemonCellStyle';

const PokemonCell = (props: {pokemon: any; onPress?: any}) => {
  const {pokemon, onPress} = props;

  const _detailPokemon = () => {
    onPress(pokemon);
  };

  return (
    <ButtonContainer underlayColor={'transparent'} onPress={_detailPokemon}>
      <BodyCell weaknesses={pokemon.type}>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.type.map((pokemonType: string, index: any) => {
          return <PokemonType index={index} pokemonTypeName={pokemonType} />;
        })}

        <PokeDexImageCell />
        <PokemonImageCell source={{uri: pokemon.img}} />
      </BodyCell>
    </ButtonContainer>
  );
};

export default PokemonCell;
