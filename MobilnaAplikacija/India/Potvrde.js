import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default class Potvrde extends Component {
  //Komponenta za potvrde
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Potvrde </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
