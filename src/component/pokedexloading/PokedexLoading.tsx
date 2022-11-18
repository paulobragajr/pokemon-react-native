// PokedexLoading
import React from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import {PokedexLoadingBody, pokedexLoadingStyle} from './PokedexLoadingStyle';

const PokedexLoading = (props: {loading?: boolean}) => {
  const {loading} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      style={pokedexLoadingStyle.modal}>
      <PokedexLoadingBody>
        <ActivityIndicator animating={loading} color="white" />
      </PokedexLoadingBody>
    </Modal>
  );
};

export default PokedexLoading;

PokedexLoading.defaultProps = {
  loading: false,
};
