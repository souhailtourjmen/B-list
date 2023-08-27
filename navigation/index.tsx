

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {ColorSchemeName} from 'react-native';
import RootNavigator from './RootNavigator';
import React from 'react';

function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
    </NavigationContainer>
  );
}
export default Navigation;
