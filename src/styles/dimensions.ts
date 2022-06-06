import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('screen');

export const isLowTierScreen = Dimensions.get('window').height <= 600;
