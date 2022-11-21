import styled from 'styled-components/native';
import {PokemonColors} from '../../../../assets/colors/PokemonColors';
import PokedexImage from '../../../../assets/image/pokeball.png';

const BodyCell = styled.View.attrs((props: {weaknesses: string}) => ({
  backgroundColor: PokemonColors.getTypePokemonColor(props.weaknesses),
}))`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

const PokemonName = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PokemonImageCell = styled.Image.attrs({})`
  position: absolute;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  right: 5px;
  bottom: 5px;
`;

const PokeDexImageCell = styled.Image.attrs((props: {Img: any}) => ({
  source: props.Img || PokedexImage,
}))`
  opacity: 0.4;
  position: absolute;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  right: 5px;
  bottom: 5px;
`;

const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-size: 11px;
`;

const PokemonTypeBodyCell = styled.View`
  padding-start: 5%;
  margin-top: 5px;
  width: 45%;
  background-color: #2a2b2b2b;
  border-radius: 10px;
  border-width: 1px;
  border-color: #2a2b2b2b;
`;

export {
  PokemonName,
  PokeDexImageCell,
  PokemonImageCell,
  BodyCell,
  PokemonTypeBodyCell,
  PokemonTypeText,
};
