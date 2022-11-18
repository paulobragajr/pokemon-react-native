import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {PokemonColors} from '../../assets/colors/PokemonColors';
import PokedexLoading from '../pokedexloading/PokedexLoading';
import {pokedexContainerStyle} from './PokedexContainerStyle';

const PokedexContainer = (props: {
  style?: any;
  children?: any;
  loading?: boolean;
}) => {
  const {children, style, loading} = props;

  return (
    <SafeAreaView style={[pokedexContainerStyle.container, style]}>
      <StatusBar barStyle={PokemonColors.themes.statusBar} />
      {children}
      <PokedexLoading loading={loading} />
    </SafeAreaView>
  );
};

export default PokedexContainer;

PokedexContainer.defaultProps = {
  loading: false,
};
