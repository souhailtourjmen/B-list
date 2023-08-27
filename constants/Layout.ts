/* eslint-disable prettier/prettier */
import { Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 100;

export default {
  window: {
    width,
    height,
  },
  PageSize: 30,
  isSmallDevice: width < 375,
};
