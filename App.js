import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import MainStackNavigator from './src/Navigation/AppNavigator';
import store from './src/redux/store';
export default function App() {
  return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  );
};

