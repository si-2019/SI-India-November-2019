import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
 class Obavijest extends Component {
  render() {
    return (
      <View>
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
export default Obavijest;