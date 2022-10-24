import PokemonDetailScreen from '../main/pokemondetail/presentation/PokemonDetailScreen';
import PokemonListScreen from '../main/pokemonlist/presentation/PokemonListScreen';
import {makeRemotePokemon} from '../main/pokemonlist/service/RemotePokemonList';

const MakePokemonListScreen: React.FC = ({navigation}): JSX.Element => {
  return (
    <PokemonListScreen
      pokemonList={makeRemotePokemon()}
      navigation={navigation}
    />
  );
};

const MakePokemonDetailScreen: React.FC = (props: any): JSX.Element => {
  return (
    <PokemonDetailScreen navigation={props.navigation} propsElement={props} />
  );
};
export {MakePokemonListScreen, MakePokemonDetailScreen};
