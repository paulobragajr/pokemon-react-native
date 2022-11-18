import React, {useState, useEffect} from 'react';
import {PokedexContainer, PokedexList} from '../../../component';
import {Pokemon} from '../../../model/Pokemon';
import {PokemonList} from '../model/PokemonList';
import PokemonCell from './pokemoncell/PokemonCell';
import {TitleText} from './PokemonListStyle';

type Props = {
  pokemonList: PokemonList;
  navigation: any;
};

const PokemonListView: React.FC<Props> = ({navigation, pokemonList}: Props) => {
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPokemonList();
  }, []);

  const showDetails = (pokemon: Pokemon) => {
    navigation.navigate('PokemonDetailScreen', {
      pokemon: pokemon,
      pokemonList: listPokemon,
    });
  };

  const getPokemonList = async () => {
    pokemonList
      .getPokemonAll()
      .then((response: any) => {
        setListPokemon(response.pokemon);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const _renderItem = (itemCell: any): JSX.Element => {
    const {index, item} = itemCell;
    return <PokemonCell index={index} pokemon={item} onPress={showDetails} />;
  };

  return (
    <PokedexContainer loading={loading}>
      <TitleText>PokeDex</TitleText>
      <PokedexList numColumns={2} data={listPokemon} renderItem={_renderItem} />
    </PokedexContainer>
  );
};

export default PokemonListView;
