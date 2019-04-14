import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions,} from 'react-native';

const data=[
    {key: 'Potvrda o regulisanju stipendije', value: '25.01.2019'}, {key: 'Potvrda o regulisanju zdravstvenog osiguranja', value:'02.02.2019.'}
];

export default class Zahtjev extends React.Component {
    renderItem=({ item, index})=>{
        return(
            <View style={styles.item}>
            <Text style ={styles.itemText}>Vrsta potvrde: </Text>
            <Text style ={styles.itemT}> {item.key}</Text> 
            <Text style ={styles.itemText}>Datum izdavanja: </Text>
            <Text style={styles.itemT}>{item.value}</Text>
            </View>
        );
    };
  render() {
    return (
      <FlatList data={data} style={styles.container} renderItem={this.renderItem} />
        
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      marginVertical:20, 
      alignSelf: 'stretch',    
      marginRight:50, 
  },
  item:{
    paddingBottom: 10, 
    paddingTop: 40,
    marginBottom: 50,
  },
  itemT:{
    flex:1,
    fontStyle: 'italic',
  },
  itemText:{
    flex:1,
    fontWeight: 'bold'
  }
});
