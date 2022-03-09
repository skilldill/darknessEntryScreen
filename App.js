import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Navigation } from './navigation';
import { EntryCodeProvider } from './services';

const App = () => {
  return (
    <EntryCodeProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000'}}>
        <StatusBar barStyle="default" />
        <Navigation />
      </SafeAreaView>
    </EntryCodeProvider>
  );
};

export default App;
