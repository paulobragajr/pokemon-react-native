import {PokemonNextEvolution} from './PokemonNextEvolution';

export interface Pokemon {
  id?: number;
  avg_spawns?: number;
  candy_count?: number;
  spawn_chance?: number;
  num?: string;
  spawn_time?: string;
  weight?: string;
  candy?: string;
  egg?: string;
  height?: string;
  img?: string;
  name?: string;
  multipliers?: [number];
  type?: [string];
  weaknesses?: [string];
  next_evolution?: [PokemonNextEvolution];
}
