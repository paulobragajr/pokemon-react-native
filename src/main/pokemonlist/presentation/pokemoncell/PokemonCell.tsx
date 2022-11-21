import React from 'react';
import PokedexTouchableHighlight from '../../../../component/pokedextouchablehighlight/PokedexTouchableHighlight';
import PokedexType from '../../../../component/pokedextype/PokedexType';

import {
  BodyCell,
  PokeDexImageCell,
  PokemonImageCell,
  PokemonName,
} from './PokemonCellStyle';

const PokemonCell = (props: {
  index: any;
  pokemon: any;
  onPress?: any;
  paramsFireBase?: {[key: string]: any};
}) => {
  const {index, pokemon, onPress, paramsFireBase} = props;

  const _detailPokemon = () => {
    onPress(pokemon);
  };

  return (
    <PokedexTouchableHighlight
      key={'pokemonID_' + pokemon.id + '_indexID_' + index}
      paramsFireBase={paramsFireBase}
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
    </PokedexTouchableHighlight>
  );
};

export default PokemonCell;
