import React, { Component } from 'react'
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'


class PodaciOStudentu extends Component  {

render() {  
return (
<ScrollView>
    <View>
        <Text style = {styles.podnaslov}>
        Osnovni podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Ime"/>
        <Text style = {styles.tekst1}>
        Prezime:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Prezme"/>
        <Text style = {styles.tekst1}>
        Spol:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Spol"/>
        <Text style = {styles.tekst1}>
        Broj indeksa:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Broj indeksa"/>
        <Text style = {styles.tekst1}>
        JMBG:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "JMBG"/>
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Kontakt podaci
        </Text>
        <Text style = {styles.tekst1}>
        Adresa (ulica i broj):
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Adresa (ulica i broj)"/>
        <Text style = {styles.tekst1}>
        Adresa (mjesto):
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Adresa (mjesto)"/>
        <Text style = {styles.tekst1}>
        Kontaks telefon:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Kontaks telefon"/>
        <Text style = {styles.tekst1}>
        Kontakt e-mail:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Kontakt e-mail"/>
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Lični podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime oca:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Ime oca:"/>
        <Text style = {styles.tekst1}>
        Prezime oca:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Prezime oca"/>
        <Text style = {styles.tekst1}>
        Ime majke:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Ime majke"/>
        <Text style = {styles.tekst1}>
        Prezime majke:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Prezime majke"/>
        <Text style = {styles.tekst1}>
        Datum rođenja:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Datum rođenja"/>
        <Text style = {styles.tekst1}>
        Mjesto rođenja:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Mjesto rođenja:"/>
        <Text style = {styles.tekst1}>
        Općina rođenja:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Općina rođenja"/>
        <Text style = {styles.tekst1}>
        Država rođenja:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Država rođenja"/>
        <Text style = {styles.tekst1}>
        Nacionalnost:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Nacionalnost"/>
        <Text style = {styles.tekst1}>
        Kanton/regija:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Kanton/regija"/>
        <Text style = {styles.tekst1}>
        Državljanstvo
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Državljanstvo"/>
    </View>
 </ScrollView>
);
}
}
export default PodaciOStudentu;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row'
    },
    button: {
    backgroundColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    marginLeft: '18%',
    marginRight: '18%',
    marginBottom: 20
    },      
    podnaslov: {
    backgroundColor: '#B9D6DF',
    color: 'black',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    },
    input: {
    marginLeft: 7,
    height: 40,
    borderWidth: 1,
    width: '90%',
    borderColor: 'lightgrey'
    },
    tekst1: {
    color: 'black',
    fontSize: 13,
    marginTop: 7,
    marginLeft: 10
    }
   })