import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
const API_BASE_URL= 'https://si2019november.herokuapp.com';
class PrviParcijalniIzvjestaj extends Component {
  state = {
    subjects: []
  };

  componentDidMount() {
    fetch(API_BASE_URL+`/November/dohvatiPrveParcijale?idStudenta=${global.idStudenta}`,
    {
      headers:{
        Authorization: global.token
      }
    })
    .then(res=>res.json()).then(response=>{
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
export default PrviParcijalniIzvjestaj;
