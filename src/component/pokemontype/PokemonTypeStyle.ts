import styled from 'styled-components/native';

const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-size: 11px;
  color: ${props => (props.isBlackText ? '#000' : '#ffffff')};
`;

const PokemonTypeBodyCell = styled.View`
  margin-top: 5px;
  padding: 1px;
  width: 45%;
  background-color: #2a2b2b2b;
  border-radius: 10px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-color: #2a2b2b2b;
  margin-start: ${props => (props.isRow ? '5px' : '0px')};
  margin-end: ${props => (props.isRow ? '5px' : '0px')};
`;

export {PokemonTypeBodyCell, PokemonTypeText};
