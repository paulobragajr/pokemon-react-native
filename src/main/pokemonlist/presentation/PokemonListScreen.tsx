import React, {useState, useEffect} from 'react';

import {SafeAreaView, StatusBar, FlatList, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Pokemon} from '../../../model/Pokemon';
import {PokemonList} from '../model/PokemonList';
import PokemonCell from './pokemoncell/PokemonCell';
import {TitleText} from './PokemonListStyle';

type Props = {
  pokemonList: PokemonList;
};

const PokemonListScreen: React.FC<Props> = ({pokemonList}: Props) => {
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  /**
   * Request Service
   */
  const getPokemonList = async () => {
    try {
      const pokemonAll = await pokemonList.getPokemonAll();
      setListPokemon(pokemonAll.pokemon);
    } catch (err) {}
  };

  const _renderItem = ({item}): JSX.Element => {
    return <PokemonCell pokemon={item} />;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TitleText>PokeDex</TitleText>
      <FlatList
        style={{flex: 1}}
        data={listPokemon}
        numColumns={2}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;
