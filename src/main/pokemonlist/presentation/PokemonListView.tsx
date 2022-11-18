import React, {useState, useEffect} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {PokemonColors} from '../../../assets/colors/PokemonColors';
import PokedexList from '../../../component/pokedexlist/PokedexList';
import {Pokemon} from '../../../model/Pokemon';
import {PokemonList} from '../model/PokemonList';
import PokemonCell from './pokemoncell/PokemonCell';
import {TitleText, styles} from './PokemonListStyle';

type Props = {
  pokemonList: PokemonList;
  navigation: any;
};

const PokemonListView: React.FC<Props> = ({navigation, pokemonList}: Props) => {
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    getPokemonList();
  }, []);

  const showDetails = (pokemon: Pokemon) => {
    navigation.navigate('PokemonDetailScreen', {
      pokemon: pokemon,
      pokemonList: listPokemon,
    });
  };

  /**
   * Request Service
   */
  const getPokemonList = async () => {
    pokemonList
      .getPokemonAll()
      .then((response: any) => {
        setListPokemon(response.pokemon);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const _renderItem = ({item, index}): JSX.Element => {
    return <PokemonCell index={index} pokemon={item} onPress={showDetails} />;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={PokemonColors.themes.statusBar} />
      <TitleText>PokeDex</TitleText>
      <PokedexList numColumns={2} data={listPokemon} renderItem={_renderItem} />
    </SafeAreaView>
  );
};

export default PokemonListView;
