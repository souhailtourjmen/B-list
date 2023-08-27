import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/rootstackparmlist';
import {OnboardingScreen} from '../screens';

const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
