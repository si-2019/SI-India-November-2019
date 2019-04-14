import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class OdslusaniPredmeti extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = 
        {
            predmeti : []
        }
    }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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


export default OdslusaniPredmeti;