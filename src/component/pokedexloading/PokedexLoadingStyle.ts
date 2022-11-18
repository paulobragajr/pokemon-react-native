import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const PokedexLoadingBody = styled.View.attrs(() => ({
  zIndex: 1000,
}))`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #rgba(0, 0, 0, 0.5);
`;

const pokedexLoadingStyle = StyleSheet.create({
  modal: {zIndex: 1100},
});

export {PokedexLoadingBody, pokedexLoadingStyle};
