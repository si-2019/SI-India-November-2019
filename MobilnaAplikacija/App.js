import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AktivniIspiti from './India/AktivniIspiti';
import PrijavljeniIspiti from './India/PrijavljeniIspiti';

export default class App extends React.Component {
  render() {
    return (
      <PrijavljeniIspiti/>
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
