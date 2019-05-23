import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default class Izvjestaji extends Component {
  render() {

    const studentID = this.props.navigation.state.params;

    


    return (
      <View style={styles.MainContainer}>
          
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
