import React from 'react';
import {PokedexButton} from './PokedexTouchableHighlightStyle';
import analytics from '@react-native-firebase/analytics';

const PokedexTouchableHighlight = (props: {
  onPress?: any;
  children?: any;
  paramsFireBase?: {[key: string]: any};
}) => {
  const {children, onPress, paramsFireBase} = props;

  const onPressPokedexTouchableHighlight = () => {
    analytics().logEvent('changeRoute', paramsFireBase);
    onPress();
  };

  return (
    <PokedexButton
      underlayColor={'transparent'}
      onPress={onPressPokedexTouchableHighlight}>
      {children}
    </PokedexButton>
  );
};

export default PokedexTouchableHighlight;

PokedexTouchableHighlight.defaultProps = {
  loading: false,
  onPress: () => {},
  paramsFireBase: {},
};
