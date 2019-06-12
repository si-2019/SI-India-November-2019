import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {ListaIzvjestaja} from './SviIzvjestaji/ListaIzvjestaja'

export default class Izvjestaji extends Component {
  //Komponenta za izvještaje
  render() {

    return (
      <View style={styles.MainContainer}>
        <ListaIzvjestaja navigation={this.props.navigation}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 10,
  },
});
