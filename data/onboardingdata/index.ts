import {AnimationObject} from 'lottie-react-native';
import { COLORS } from '../../constants';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../../assets/animations/Lottie13.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#005b4f',
    backgroundColor: COLORS.backgroundColor.bg1,
  },
  {
    id: 2,
    animation: require('../../assets//animations/Lottie2.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#1e2169',
    backgroundColor: COLORS.secondary,
  },
  {
    id: 3,
    animation: require('../../assets//animations/Lottie3.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;
