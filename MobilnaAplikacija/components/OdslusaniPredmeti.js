import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class OdslusaniPredmeti extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = 
        {
            predmeti : []
        }
    }

    dohvatiPredmete()
    {
        /*
        axios.get("url/id="+this.props.idStudenta).then(
            res => {
                this.state.predmeti = res.data;//Eventualno promijeniti ako bude drugi format
            }
        )*/
        
        this.state.predmeti = [
            {naziv: "Inženjerska matematika 1"},
            {naziv: "Osnove elektrotehnike"},
            {naziv: "Inženjerska fizika 1"},
            {naziv: "Linearna algebra i geometrija"},
            {naziv: "Osnove računarstva"}

        ]
    }

    componentWillMount()
    {
        this.dohvatiPredmete();
    }


    render() {
        return (
        <View style={styles.container}>
            <Text style={{fontWeight: "bold"}}>Odslušani predmeti</Text>
            <FlatList 
                data = {this.state.predmeti}
                keyExtractor={item => item.naziv}
                renderItem = {({item}) => <Text style={styles.item}>{item.naziv}</Text>}            
            
            />
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
  item : {
      padding:5,
      fontSize: 14,
      height: 24,
  },
});


export default OdslusaniPredmeti;