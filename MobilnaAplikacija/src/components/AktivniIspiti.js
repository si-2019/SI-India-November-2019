import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AktivniIspiti extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.predmet}>
        <Text style = {styles.naslov}>Predmet</Text>
        <Text style = {styles.prvi}>Vjestacka inteligencija</Text>
        <Text style = {styles.drugi}>Organizacija softverskog projekta</Text>
        <Text style = {styles.treci}>Softverski inzenjering</Text>
        <Text style = {styles.cetvrti}>Projektovanje informacionih sistema</Text> 
        </View>
        <View style={styles.tip}>
        <Text style = {styles.naslov}>Tip ispita</Text>
        <Text style = {styles.prvi}>Prvi parcijalni</Text>
        <Text style = {styles.drugi}>Drugi parcijalni</Text>
        <Text style = {styles.treci}>Prvi parcijalni</Text>
        <Text style = {styles.cetvrti}>Usmeni</Text>
        </View>
      </View> 
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',   
  },
  predmet: {
    marginTop: '25%',
    flex:1/2,
  },
 
  tip: { 
    flex:1/2, 
    marginTop: '25%',
  },

   naslov: {
    position: 'absolute',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    top: '10%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },

  prvi: {
    position: 'absolute',
    top: '20%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   drugi: {
    position: 'absolute',
    top: '30%',
     fontSize: 12,
     paddingRight: '5%',
     paddingLeft: '5%',
   },
   treci: {
    position: 'absolute',
    top: '40%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
   cetvrti: {
    position: 'absolute',
    top: '50%',
    fontSize: 12,
    paddingRight: '5%',
    paddingLeft: '5%',
   },
});
