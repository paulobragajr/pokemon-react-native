import React, {useState, useEffect} from 'react';

import {SafeAreaView, StatusBar, FlatList} from 'react-native';

import {PokemonColors} from '../../../assets/colors/PokemonColors';
import {Pokemon} from '../../../model/Pokemon';
import {PokemonList} from '../model/PokemonList';
import PokemonCell from './pokemoncell/PokemonCell';
import {TitleText, styles} from './PokemonListStyle';

type Props = {
  pokemonList: PokemonList;
  navigation: any;
};

const PokemonListScreen: React.FC<Props> = ({
  navigation,
  pokemonList,
}: Props) => {
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

  const _renderItem = ({item}): JSX.Element => {
    return <PokemonCell pokemon={item} onPress={showDetails} />;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={PokemonColors.themes.statusBar} />
      <TitleText>PokeDex</TitleText>
      <FlatList
        style={styles.list}
        data={listPokemon}
        numColumns={2}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;
