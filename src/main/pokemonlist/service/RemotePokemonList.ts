import {makeApiUrl} from '../../../request/ApiUrlFactory';
import {makeAxiosHttpClient} from '../../../request/client/AxiosHttpClientFactory';
import {PokemonList} from '../model/PokemonList';
import {RemotePokemonList} from '../usecase/RemotePokemonList';

export const makeRemotePokemon = (): PokemonList =>
  new RemotePokemonList(
    makeApiUrl('/master/pokedex.json'),
    makeAxiosHttpClient(),
  );
