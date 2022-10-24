import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {PokemonColors} from '../../../assets/colors/PokemonColors';

const TitleText = styled.Text`
  margin-start: 16px;
  margin-top: 5%;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${PokemonColors.themes.textTitle};
`;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: PokemonColors.themes.backgroundColor,
    flex: 1,
  },
  list: {flex: 1},
});

export {TitleText, styles};
