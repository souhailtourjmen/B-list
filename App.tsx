/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import useColorScheme from './hooks/useColorScheme';

import Navigation from './navigation';


function App(): JSX.Element {
  const colorScheme = useColorScheme();



  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation colorScheme={colorScheme} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
