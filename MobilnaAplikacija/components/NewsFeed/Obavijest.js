import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
 class Obavijest extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Obavijest: {this.props.naziv}</Text>
          <Text>{this.props.tekst}</Text>
      </View>
    )
  }
}
Obavijest.propTypes={
    naziv:PropTypes.string.isRequired,
    tekst:PropTypes.string.isRequired
}
const styles = StyleSheet.create({
    container: {
    
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: 'lightblue'
      
    },
  });
export default Obavijest;