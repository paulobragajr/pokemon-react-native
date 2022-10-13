// PokemonListScreen

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  FlatList,
  useColorScheme,
  View,
  Image,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Pokemon} from '../../model/Pokemon';
import {PokemonList} from '../../model/PokemonList';
import {GetPokemonList} from '../../servce/PokemonListService';

const PokemonListScreen = () => {
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        console.warn(response.pokemon[0].weaknesses);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const getColor = weaknesses => {
    var backGroundcolor = '#eaaf63';
    if (weaknesses) {
      backGroundcolor = '#eaaf63';
    } else if (weaknesses.includes('Water')) {
      backGroundcolor = '#63cbea';
    } else if (weaknesses.includes('Grass')) {
      backGroundcolor = '#63eaab';
    } else if (weaknesses.includes('Electric')) {
      backGroundcolor = '#ead363';
    } else if (weaknesses.includes('Fire')) {
      backGroundcolor = '#ea6363';
    } else if (weaknesses.includes('Psychic')) {
      backGroundcolor = '#9a63ea';
    } else {
      backGroundcolor = '#eaaf63';
    }
    return backGroundcolor;
  };

  const _renderItem = ({item}): JSX.Element => {
    return (
      <View
        style={{
          flex: 1,
          marginRight: 10,
          marginLeft: 10,
          marginTop: 10,
          padding: 10,
          height: 100,
          backgroundColor: getColor(item.weaknesses),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#ffffff',
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          {item.name}
        </Text>
        {item.type.map(pokemonType => {
          return (
            <View
              style={{
                paddingStart: 10,
                marginTop: 5,
                width: 60,
                backgroundColor: '#2A2B2B2B',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#2A2B2B2B',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                }}>
                {pokemonType}
              </Text>
            </View>
          );
        })}

        <Image
          style={{
            opacity: 0.4,
            position: 'absolute',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            right: 5,
            bottom: 5,
          }}
          source={require('../../assets/image/pokeball.png')}
        />
        <Image
          style={{
            position: 'absolute',
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            right: 10,
            bottom: 10,
          }}
          source={{uri: item.img}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text
        style={{
          marginStart: 16,
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        PokeDex
      </Text>
      <FlatList
        data={listPokemon}
        style={{width: '100%', height: '100%'}}
        numColumns={2}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;
