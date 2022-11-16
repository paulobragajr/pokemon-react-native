import {Appearance} from 'react-native';
import PokemonModelColors from './PokemonModelColors';

const themeDark: PokemonModelColors = {
  textTitle: '#ffffff',
  textTitleDetail: '#ffffff',
  backgroundColor: '#000000',
  cellBackgroundColor: 'rgba(255, 255, 255, 0.15)',
  cellBackgroundColoSubContainer: '#1a1a1a',
  statusBar: 'light-content',
  borderColorDetail: '#ffffff',
  textDetailColor: '#ffffff',
  cardInfoDetailBackgroundColor: 'rgba(255, 255, 255, 0.15)',
} as PokemonModelColors;

const themeLight: PokemonModelColors = {
  textTitle: '#000000',
  textTitleDetail: '#ffffff',
  backgroundColor: '#fefffe',
  cellBackgroundColor: 'rgba(0, 0, 0, 0.15)',
  cellBackgroundColoSubContainer: '#f2f2f2',
  statusBar: 'dark-content',
  borderColorDetail: '#000000',
  textDetailColor: '#000000',
  cardInfoDetailBackgroundColor: '#fff',
} as PokemonModelColors;

const typePokemonColors = {
  water: '#75bdfd',
  grass: '#48cfaf',
  electric: '#ffce4a',
  fire: '#fc6b6c',
  psychic: '#9a63ea',
  default: '#b1726c',
};

class PokemonColors {
  static isDarkMode = Appearance.getColorScheme() === 'dark';

  static themes: PokemonModelColors = PokemonColors.isDarkMode
    ? (themeDark as PokemonModelColors)
    : (themeLight as PokemonModelColors);

  static getTypePokemonColor = (weaknesses: string | string[]) => {
    var backGroundcolor = typePokemonColors.default;
    if (weaknesses) {
      if (weaknesses.includes('Water')) {
        backGroundcolor = typePokemonColors.water;
      } else if (weaknesses.includes('Grass')) {
        backGroundcolor = typePokemonColors.grass;
      } else if (weaknesses.includes('Electric')) {
        backGroundcolor = typePokemonColors.electric;
      } else if (weaknesses.includes('Fire')) {
        backGroundcolor = typePokemonColors.fire;
      } else if (weaknesses.includes('Psychic')) {
        backGroundcolor = typePokemonColors.psychic;
      }
      //  else if (weaknesses.includes('Poison')) {
      //   backGroundcolor = typePokemonColors.psychic;
      // }
    }
    return backGroundcolor;
  };
}
export {PokemonColors};
