import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profil from './ProfilStudenta/profilStudenta'

export default class App extends React.Component {
  render() {
    return (
      <Profil />
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
