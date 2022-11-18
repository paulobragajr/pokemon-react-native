import React from 'react';
import PokemonDetailView from '../main/pokemondetail/presentation/PokemonDetailView';
import PokemonListView from '../main/pokemonlist/presentation/PokemonListView';
import {makeRemotePokemon} from '../main/pokemonlist/service/RemotePokemonList';

const PokemonListScreen: React.FC = (props: any): JSX.Element => {
  return (
    <PokemonListView
      pokemonList={makeRemotePokemon()}
      navigation={props.navigation}
    />
  );
};

const PokemonDetailScreen: React.FC = (props: any): JSX.Element => {
  return (
    <PokemonDetailView navigation={props.navigation} propsElement={props} />
  );
};

export {PokemonListScreen, PokemonDetailScreen};
