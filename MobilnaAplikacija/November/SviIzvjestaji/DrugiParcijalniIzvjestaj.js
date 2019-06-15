import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, ScrollView} from 'react-native';

const API_BASE_URL= 'https://si2019november.herokuapp.com';
class DrugiParcijalniIzvjestaj extends Component {

  // default State object
  state = {
    subjects: []
  };

  componentDidMount() {
    var upit = `/November/dohvatiDrugeParcijale?idStudenta=` + global.idStudenta;
    fetch(API_BASE_URL+upit).then(res=>res.json()).then(response=>{
      const newContacts = response.map(c => {
        return {
          predmet: c.predmet,
          bodovi: c.bodovi
        };
      });
      const newState = Object.assign({}, this.state, {
        subjects: newContacts
      });
      this.setState(newState);
    }).catch(e=>{
      this.setState({
        subjects: getSubjects
      });
    });
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
export default DrugiParcijalniIzvjestaj;
const getSubjects = [
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 8
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 18
  },
  {
    predmet: "Softver inženjering",
    bodovi : 16
  },
  {
    predmet: "Projektovanje informacionih sistema",
    bodovi : 16
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
