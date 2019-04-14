import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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


    render() {
        return (
        <View style={styles.container}>
            <Text style={{fontWeight: "bold"}}>Odslušani predmeti</Text>
            <FlatList 
                data = {this.state.predmeti}
                renderItem = {({item}) => <Text>{item.naziv}</Text>}            
            
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
});


export default OdslusaniPredmeti;