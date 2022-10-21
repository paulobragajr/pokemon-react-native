import PokemonListScreen from '../main/pokemonlist/presentation/PokemonListScreen';
import {makeRemotePokemon} from '../main/pokemonlist/service/RemotePokemonList';

const MakePokemonListScreen: React.FC = () => {
  return <PokemonListScreen pokemonList={makeRemotePokemon()} />;
};

export {MakePokemonListScreen};
