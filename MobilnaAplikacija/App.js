import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Obavijesti from './components/NewsFeed/Obavijesti';
export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
           <Obavijesti id={1}/>
        </View>
       
       
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
      marginTop:40
    
  },
});

