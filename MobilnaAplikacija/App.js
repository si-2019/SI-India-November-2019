import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Naslov from './components/header';
import Zahtjev from './components/prikaz';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Naslov/>
        <Zahtjev/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
