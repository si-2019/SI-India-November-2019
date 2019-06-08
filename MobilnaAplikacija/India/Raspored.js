import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';




class pon extends React.Component {

  render() {
    return (
      <View style={styles.container}>   
          <View style ={styles.predmet}>
          <Text>SI</Text>
          </View>
          <View style ={styles.tip}>
          <Text>Predavanje</Text>
          </View>
          <View style ={styles.vrijeme}>
          <Text>09:00</Text>
          </View>

      </View>
    );
  }

}

class uto extends React.Component {


  render() {
    return (
      <View style={styles.container}>   
      <View style ={styles.predmet}>
      <Text>SI</Text>
      </View>

          <View style ={styles.tip}>
          <Text>Zadaća</Text>
          </View>
          <View style ={styles.vrijeme}>
          <Text>23:00</Text>
          </View>

      </View>
    );
  
  }

}

class sri extends React.Component {


  render() {
    return (
      <View style={styles.container}>   
       <View style ={styles.predmet}>
      <Text>VI</Text>
      </View>

          <View style ={styles.tip}>
          <Text>Zadaća</Text>
          </View>
          <View style ={styles.vrijeme}>
          <Text>22:00</Text>
          </View>

      </View>
    );
  
  }

}


class cet extends React.Component {


  render() {
    return (
      <View style={styles.container}>   
       <View style ={styles.predmet}>
      <Text>VI</Text>
      </View>

          <View style ={styles.tip}>
          <Text>Vježbe</Text>
          </View>
          <View style ={styles.vrijeme}>
          <Text>11:00</Text>
          </View>

      </View>
    );
  
  }

}


class pet extends React.Component {


  render() {
    return (
      <View style={styles.sloboDan}>   
      <Text>Nema dodanih obaveza</Text>

      </View>
    );
  
  }

}


class sub extends React.Component {


  render() {
    return (
      <View style={styles.sloboDan}>   
      <Text>Nema dodanih obaveza</Text>
      

      </View>
    );
  
  }

}


class ned extends React.Component {


  render() {
    return (
      <View style={styles.sloboDan}>  
      <Text>Nema dodanih obaveza</Text> 

      </View>
    );
  
  }

}


const TabNavigator = createBottomTabNavigator({
  Ponedjeljak: pon,
  Utorak: uto,
  Srijeda: sri,
  Četvrtak: cet,
  Petak: pet,
  Subota: sub,
  Nedjelja: ned
});

const styles = StyleSheet.create({

  sloboDan: {
    backgroundColor: 'lightskyblue',
    flexDirection: 'row',   
    color: 'blue',
    paddingTop: '25%',
    flex:1,
    paddingLeft: '7%',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',   
  },
  tip: {
    marginTop: '25%',
    flex:1/3,
    paddingLeft: '7%',
  },

  predmet: {
    marginTop: '25%',
    flex:1/3,
    paddingLeft: '12%',
  },
 
  vrijeme: { 
    flex:1/3, 
    marginTop: '25%',
    paddingLeft: '7%',
  },



 
});


export default createAppContainer(TabNavigator);