import {PokemonListModel} from '../../../model/PokemonListModel';

export interface PokemonList {
  getPokemonAll: () => Promise<PokemonList.Model>;
}

export namespace PokemonList {
  export type Model = PokemonListModel;
}
