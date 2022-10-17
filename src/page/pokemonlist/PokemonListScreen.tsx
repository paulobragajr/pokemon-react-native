import React, {useState, useEffect} from 'react';

import {SafeAreaView, StatusBar, FlatList, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Pokemon} from '../../model/Pokemon';
import {PokemonList} from '../../model/PokemonList';
import {GetPokemonList} from '../../servce/PokemonListService';
import PokemonCell from './pokemoncell/PokemonCell';
import {TitleText} from './PokemonListStyle';

const PokemonListScreen = () => {
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
  const getPokemonList = () => {
    GetPokemonList()
      .then(response => response.data)
      .then((response: PokemonList) => {
        setListPokemon(response.pokemon);
      })
      .catch(error => {
        console.warn(error);
      });
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
