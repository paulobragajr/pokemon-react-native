import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {PokemonColors} from '../../../assets/colors/PokemonColors';
import PokedexImageSrc from '../../../assets/image/pokeball.png';

const DetailPokemonBody = styled.View.attrs((props: {type: string}) => ({
  backgroundColor: PokemonColors.getTypePokemonColor(props.type),
}))`
  flex: 1;
  flex-direction: column;
`;

const DetailPokemonName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-start: 16px;
  color: ${PokemonColors.themes.textTitleDetail};
`;

const DetailPokemonNum = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${PokemonColors.themes.textTitleDetail};
`;

const TopContainer = styled.View`
  flex: 1;
  padding-start: 5px;
  margin-top: 10px;
`;
const ContainerPokemonType = styled.View`
  flex-direction: row;
  margin-start: 10px;
  width: 40%;
`;
// {{flexDirection: 'row', marginStart: 10, width: '40%'}}
const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const DetailPokemonImage = styled.Image.attrs({})`
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
  resize-mode: contain;
`;

const PokeDexImage = styled.Image.attrs((props: {Img: any}) => ({
  source: props.Img || PokedexImageSrc,
}))`
  resize-mode: contain;
  opacity: 0.3;
  position: absolute;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const BottomContainer = styled.View`
  flex: 4;
  height: 55%;
  width: 100%;
  padding-top: 16px
  padding-start:16px
  padding-end:16px
  background-color: ${PokemonColors.themes.backgroundColor};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const CardViewInfo = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,
})`
  margin: 16px;
  flex-direction: row;
  padding: 16px;
  background-color: ${PokemonColors.themes.cardInfoDetailBackgroundColor};
  border-radius: 5px;
  border-color: ${PokemonColors.themes.borderColorDetail};
`;

const RowView = styled.View`
  flex: 1;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleTextCard = styled.Text`
  color: #bcbec1;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InfoTextCard = styled.Text`
  font-size: 12px;
  color: ${PokemonColors.themes.textTitle};
`;

const TitleInfo = styled.Text`
  font-size: 19px;
  margin-top: 10%;
  font-weight: bold;
  color: ${PokemonColors.themes.textTitle};
`;

const ContainerPokemonNextEvolution = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;
`;
const ContainerImagePokemonNextEvolution = styled.TouchableHighlight`
  flex-direction: column;
  width: 100%;
  flex: 1;
  align-items: center;
  height: 200px;
`;

const ImagePokemonNextEvolution = styled.Image.attrs({})`
  width: 100%;
  height: 70%;
  resize-mode: contain;
`;

const ContainerPokemonWeaknesses = styled.View`
  flex-direction: row;
  width: 40%;
`;

export {
  DetailPokemonBody,
  DetailPokemonImage,
  PokeDexImage,
  ContainerPokemonType,
  DetailPokemonName,
  ImageContainer,
  BottomContainer,
  TopContainer,
  CardViewInfo,
  TitleTextCard,
  InfoTextCard,
  TitleInfo,
  RowView,
  RowContainer,
  DetailPokemonNum,
  ContainerPokemonNextEvolution,
  ContainerImagePokemonNextEvolution,
  ImagePokemonNextEvolution,
  ContainerPokemonWeaknesses,
};
