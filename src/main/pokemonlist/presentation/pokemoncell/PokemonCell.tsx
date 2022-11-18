import React from 'react';
import PokedexType from '../../../../component/pokedextype/PokedexType';

import {
  BodyCell,
  PokeDexImageCell,
  PokemonImageCell,
  PokemonName,
  ButtonContainer,
} from './PokemonCellStyle';

const PokemonCell = (props: {index: any; pokemon: any; onPress?: any}) => {
  const {index, pokemon, onPress} = props;

  const _detailPokemon = () => {
    onPress(pokemon);
  };

  return (
    <ButtonContainer
      key={'pokemonID_' + pokemon.id + '_indexID_' + index}
      underlayColor={'transparent'}
      onPress={_detailPokemon}>
      <BodyCell weaknesses={pokemon.type}>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.type.map((pokemonType: string, index: any) => {
          return (
            <PokedexType
              key={index.toString()}
              index={index}
              pokemonTypeName={pokemonType}
            />
          );
        })}
        <PokeDexImageCell />
        <PokemonImageCell source={{uri: pokemon.img}} />
      </BodyCell>
    </ButtonContainer>
  );
};

export default PokemonCell;
