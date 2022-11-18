import styled from 'styled-components/native';
import {PokemonColors} from '../../assets/colors/PokemonColors';

const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-size: 11px;
  color: ${props =>
    props.isDetail ? PokemonColors.themes.textDetailColor : '#ffffff'};
`;

const PokemonTypeBodyCell = styled.View`
  margin-top: 5px;
  padding: 1px;
  width: 45%;
  background-color: ${props =>
    props.isDetail ? 'rgba(255, 255, 255, 0.15)' : '#2a2b2b2b'};
  border-color: ${props =>
    props.isDetail ? 'rgba(255, 255, 255, 0.15)' : '#2a2b2b2b'};
  border-radius: 10px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-start: ${props => (props.isRow ? '5px' : '0px')};
  margin-end: ${props => (props.isRow ? '5px' : '0px')};
`;

export {PokemonTypeBodyCell, PokemonTypeText};
