import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';

let http=axios.create();
http.defaults.timeout = 200;
class ZadaceIzvjestaj extends Component {

  // default State object
  state = {
    subjects: []
  };

  componentDidMount() {
    this.setState({
      subjects: getSubjects
    })
  }

  render() {
    return (
      <ScrollView >
      <FlatList
          data={this.state.subjects}
          keyExtractor={item => item.predmet.toString()}
          renderItem={({ item }) => (
            <View style={styles.Viewitem}>
            <View style={styles.Viewitem1}>
              <Text style={styles.item}>
                {item.predmet}
              </Text>
              </View>
              <View style={styles.Viewitem2}>
              <Text style={styles.item}>
                {item.bodovi}
              </Text>
              </View>
              </View>
          )}
        />
      </ScrollView>
    );
  }
  
}

//Hardkodirani podaci Za slučaj kad se ne može konektovati na bazu
export default ZadaceIzvjestaj;
const getSubjects = [
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 15
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 12
  },
  {
    predmet: "Softver inženjering",
    bodovi : 0
  }
]
const styles = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    fontSize: 16,
    height: 80,
  },
  Viewitem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewitem1: {
    borderWidth: 1,  
    borderColor: "black",
    backgroundColor: "#ededed",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%'
  },
  Viewitem2: {
    borderWidth: 1,  
    borderColor: "black",
    backgroundColor: "#ededed",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

