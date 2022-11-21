import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import PokemonColors from '../../../assets/colors/PokemonColors';
import {PokedexContainer} from '../../../component';
import PokedexType from '../../../component/pokedextype/PokedexType';
import {Pokemon} from '../../../model/Pokemon';
import {
  DetailPokemonBody,
  DetailPokemonImage,
  DetailPokemonName,
  ContainerPokemonType,
  ImageContainer,
  PokeDexImage,
  BottomContainer,
  TopContainer,
  CardViewInfo,
  TitleTextCard,
  InfoTextCard,
  TitleInfo,
  RowView,
  RowContainer,
  DetailPokemonNum,
  ContainerPokemonNextEvolution,
  ContainerImagePokemonNextEvolution,
  ImagePokemonNextEvolution,
  ContainerPokemonWeaknesses,
} from './PokemonDetailStyle';

type Props = {
  navigation: any;
  route: any;
};

const PokemonDetailView: React.FC<Props> = ({navigation, route}: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>({});
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    setPokemon(route.params.pokemon);
    setListPokemon(route.params.pokemonList);
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: PokemonColors.getTypePokemonColor(
          route.params.pokemon.type,
        ),
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation, route.params.pokemon, route.params.pokemonList]);

  const renderPokemonType = () => {
    if (pokemon.type) {
      return (
        <ContainerPokemonType>
          {pokemon.type.map((pokemonType: string, index: any) => {
            return (
              <PokedexType
                isRow
                key={index.toString()}
                index={index}
                pokemonTypeName={pokemonType}
              />
            );
          })}
        </ContainerPokemonType>
      );
    } else {
      return <></>;
    }
  };

  const renderPokemonWeaknesses = () => {
    if (pokemon.weaknesses) {
      return (
        <ContainerPokemonWeaknesses>
          {pokemon.weaknesses.map((pokemonWeaknesses: string, index: any) => {
            return (
              <PokedexType
                isDetail
                isRow
                key={index.toString()}
                index={index}
                pokemonTypeName={pokemonWeaknesses}
              />
            );
          })}
        </ContainerPokemonWeaknesses>
      );
    } else {
      return <></>;
    }
  };

  const getPokemon = (indexPokemon: any) => {
    var pokemon;
    if (indexPokemon) {
      for (let pokemonItem of listPokemon) {
        if (pokemonItem.num === indexPokemon) {
          pokemon = pokemonItem;
        }
      }
    }
    return pokemon;
  };

  const renderPokemonNextEvolution = () => {
    if (pokemon.next_evolution) {
      return (
        <>
          <TitleInfo>Evolution Chain</TitleInfo>
          <ContainerPokemonNextEvolution>
            {pokemon.next_evolution.map(
              (pokemonNextEvolution: any, index: any) => {
                const pokemonElememnt = getPokemon(pokemonNextEvolution.num);
                return (
                  <ContainerImagePokemonNextEvolution
                    key={index.toString()}
                    onPress={() => {
                      if (pokemonElememnt) {
                        setPokemon(pokemonElememnt);
                      }
                    }}>
                    {pokemonElememnt ? (
                      <>
                        <ImagePokemonNextEvolution
                          source={{uri: pokemonElememnt.img}}
                        />

                        <PokedexType
                          isDetail
                          isRow
                          index={index}
                          pokemonTypeName={pokemonElememnt.name}
                        />
                      </>
                    ) : null}
                  </ContainerImagePokemonNextEvolution>
                );
              },
            )}
          </ContainerPokemonNextEvolution>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <PokedexContainer>
      <DetailPokemonBody type={pokemon.type}>
        <TopContainer>
          <RowContainer>
            <RowView>
              <DetailPokemonName>{pokemon.name}</DetailPokemonName>
            </RowView>
            <RowView>
              <DetailPokemonNum>#{pokemon.num}</DetailPokemonNum>
            </RowView>
          </RowContainer>
          {renderPokemonType()}
        </TopContainer>
        <ImageContainer>
          <PokeDexImage />
          <DetailPokemonImage source={{uri: pokemon.img}} />
        </ImageContainer>
        <BottomContainer>
          <ScrollView>
            <>
              <CardViewInfo>
                <RowView>
                  <TitleTextCard>Height</TitleTextCard>

                  <InfoTextCard>{pokemon.height}</InfoTextCard>
                </RowView>
                <RowView>
                  <TitleTextCard>Weight</TitleTextCard>
                  <InfoTextCard>{pokemon.weight}</InfoTextCard>
                </RowView>
              </CardViewInfo>

              <TitleInfo>Weaknesses</TitleInfo>
              {renderPokemonWeaknesses()}
              {renderPokemonNextEvolution()}
            </>
          </ScrollView>
        </BottomContainer>
      </DetailPokemonBody>
    </PokedexContainer>
  );
};

export default PokemonDetailView;
