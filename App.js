import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Navigation } from './navigation';
import { EntryCodeProvider } from './services';

const App = () => {
  return (
    <EntryCodeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    </EntryCodeProvider>
  );
};

export default App;
