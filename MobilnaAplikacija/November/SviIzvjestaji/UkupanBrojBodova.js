import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';

/*const UkupanBrojBodova = () => {
  state= {
    subjects: []
  };

  
pokupiPodatke = () => {
  axios.get("http://localhost:31914/predmeti/1/ukupnoBodova")
        .then(res => {
            this.setState({ subjects: JSON.stringify(res.data[0])});
            console.log("pozivvv")
        })
        .then(error => {
            console.error(error);
        }
    ) 
}
  
  return (
      <View style={styles.container}>
        {this.pokupiPodatke()}
        <Text>Konačna ocjena: {(this.state.subjects)}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        width: "100%",
        textAlign:"left"
    },
    text:{
        width:"100%",
        fontSize:16
    }
    ,
  });
export default UkupanBrojBodova;*/


class UkupanBrojBodova extends Component {

  // default State object
  state = {
    subjects: []
  };

  componentDidMount() {
    axios
      .get("http://192.168.0.16:31914/predmeti/1/ukupnoBodova")
      .then(response => {

        const newContacts = response.data.map(c => {
          return {
            predmet: c.predmet,
            bodovi: c.bodovi
          };
          
        });
        //console.log(newContacts);
        const newState = Object.assign({}, this.state, {
          subjects: newContacts
        });
        this.setState(newState);
        //console.log(this.state.subjects)
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View >
      <FlatList
          data={this.state.subjects}
          keyExtractor={item => item.predmet.toString()}
          renderItem={({ item }) => (
            <View style={styles.Viewitem1}>
              <Text style={styles.item}>
                {item.predmet}
              </Text>
              </View>
          )}
        />
      </View>
    );
  }
}

export default UkupanBrojBodova;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    fontSize: 16,
    height: 60,
    backgroundColor: "lightgrey"
  },
  Viewitem1: {
    borderWidth: 1,  
    borderColor: "black"
  }
});