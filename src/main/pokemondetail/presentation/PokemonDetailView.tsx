import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {PokemonColors} from '../../../assets/colors/PokemonColors';
import PokemonType from '../../../component/pokemontype/PokemonType';
import {Pokemon} from '../../../model/Pokemon';
import {
  styles,
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
  propsElement: any;
  navigation: any;
};

const PokemonDetailScreen: React.FC<Props> = ({
  propsElement,
  navigation,
}: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>({});
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    setPokemon(propsElement.route.params.pokemon);
    setListPokemon(propsElement.route.params.pokemonList);
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: PokemonColors.getTypePokemonColor(
          propsElement.route.params.pokemon.type,
        ),
      },

      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [
    navigation,
    propsElement.route.params.pokemon,
    propsElement.route.params.pokemonList,
  ]);

  const renderPokemonType = () => {
    if (pokemon.type) {
      return (
        <ContainerPokemonType>
          {pokemon.type.map((pokemonType: string, index: any) => {
            return (
              <PokemonType isRow index={index} pokemonTypeName={pokemonType} />
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
              <PokemonType
                isBlackText
                isRow
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

  const getImagePokemon = (indexPokemon: any) => {
    var image;
    if (indexPokemon) {
      for (let pokemonItem of listPokemon) {
        if (pokemonItem.num === indexPokemon) {
          image = pokemonItem.img;
        }
      }
    }
    return image;
  };

  const renderPokemonNextEvolution = () => {
    if (pokemon.next_evolution) {
      return (
        <>
          <TitleInfo>Evolution Chain</TitleInfo>
          <ContainerPokemonNextEvolution>
            {pokemon.next_evolution.map(
              (pokemonNextEvolution: any, index: any) => {
                const imagePokemon = getImagePokemon(pokemonNextEvolution.num);
                return (
                  <ContainerImagePokemonNextEvolution>
                    {imagePokemon ? (
                      <ImagePokemonNextEvolution source={{uri: imagePokemon}} />
                    ) : null}
                    <PokemonType
                      isBlackText
                      isRow
                      index={index}
                      pokemonTypeName={pokemonNextEvolution.name}
                    />
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
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={PokemonColors.themes.statusBar} />
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
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;
