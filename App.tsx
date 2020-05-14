/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import RootContainer from './App/RootContainer'

import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './App/Redux/store';

declare const global: {HermesInternal: null | {}};
const { persistor, store } = configureStore();

const App = () => {
  return (
    <> 
       <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>

        <RootContainer />
        </PersistGate>
       </Provider>
    </>
  );
};

export default App;
