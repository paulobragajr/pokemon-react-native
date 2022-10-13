import Axios from 'axios';
import {CONFIG} from './Config';

export const GetPokemonList = async () => {
  const link = `${CONFIG.baseLink}${CONFIG.contextApi}/master/pokedex.json`;
  return Axios.get(link);
};
