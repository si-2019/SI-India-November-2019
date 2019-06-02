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
    //ovdje ide localhost ako se testira preko emulatora na PC-ju, http://localhost:31914/predmeti/1/ukupnoBodova
    //a ako se testira preko expo, staviti ip adresu svog racunara
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
      //Kada se ne možemo konektovati na bazu koristimo hardkodirane podatke
      .catch(error => {
        console.log(error)
        this.setState({
          subjects: getSubjects
        });
      });
  }

  render() {
    return (
      <View >
      <FlatList
          data={this.state.subjects}
          keyExtractor={item => item.predmet.toString()}
          renderItem={({ item }) => (
            <View style={styles.Viewitem1}>
            <View style={styles.Viewitem2}>
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
      </View>
    );
  }
  
}

//Hardkodirani podaci Za slučaj kad se ne može konektovati na bazu
export default UkupanBrojBodova;
const getSubjects = [
  {
    predmet: "Organizacija softverskog projekta",
    bodovi : 41
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 41
  },
  {
    predmet: "Softver inženjering",
    bodovi : 41
  }
]
const styles = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    fontSize: 16,
    height: 60,
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
    justifyContent: 'flex-end',
    height: '70%'
  },
  Viewitem2: {
    borderWidth: 1,  
    borderColor: "black",
    backgroundColor: "#ededed",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

