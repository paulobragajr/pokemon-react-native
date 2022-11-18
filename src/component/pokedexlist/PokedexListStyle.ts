import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import PokedexImageAlert from '../../assets/image/ic_alert_circle.png';

const PokedexListBody = styled.View`
  flex: 1;
`;

const PokedexEmptyListBody = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
`;

const PokedexEmptyText = styled.Text`
  font-size: 20px;
  color: #979997;
  font-weight: bold;
`;

const PokedexEmptyImage = styled.Image.attrs((props: {Img: any}) => ({
  source: props.Img || PokedexImageAlert,
}))`
  opacity: 0.4;
  width: 50%;
  height: 30%;
  color: #979997;
  margin-top: 40%;
  resize-mode: contain;
  align-items: center;
  justify-content: center;
`;
const pokedexListStyle = StyleSheet.create({
  list: {flex: 1},
});

export {
  PokedexListBody,
  PokedexEmptyListBody,
  PokedexEmptyText,
  PokedexEmptyImage,
  pokedexListStyle,
};
