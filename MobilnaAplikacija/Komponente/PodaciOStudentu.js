import React, { Component } from 'react'
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import * as res from './pomocniPodaciOStudentu'

class PodaciOStudentu extends Component  {

state= { 
    ime: '', 
    prezime: '', 
    spol: '',  
    brIndeksa: '',  
    jmbg: '', 
    adresaUlica: '', 
    adresaMjesto: '',   
    kontaktTelefon: '', 
    kontaktEmail: '', 
    imeOca: '', 
    prezimeOca: '',
    imeMajke: '',
    prezimeMajke: '',
    datumRod: '',
    mjestoRod: '',
    opcinaRod: '',
    drzavaRod: '',
    nacionalnost: '', 
    kanton: '',
    drzavljanstvo: '',
} 
/*
axios.get("url").then(response=>{
    this.setState({ime: response.ime, prezime: response.prezime...})
})
*/

//Privremeno dodavanje dummy podataka
dodajPodatke = () => {
this.setState({ime: res.ime, prezime: res.prezime, spol: res.spol, brIndeksa: res.brIndeksa,
jmbg: res.jmbg, adresaUlica: res.adresaUlica, adresaMjesto: res.adresaMjesto, kontaktTelefon: res.kontaktTelefon,
kontaktEmail: res.kontaktEmail, imeOca: res.imeOca, prezimeOca: res.prezimeOca, imeMajke: res.imeMajke, 
prezimeMajke: res.prezimeMajke, datumRod: res.datumRod, mjestoRod: res.mjestoRod, opcinaRod: res.opcinaRod,
drzavaRod: res.drzavaRod, nacionalnost: res.nacionalnost, kanton: res.kanton, drzavljanstvo: res.drzavljanstvo });
}
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
        value={this.state.ime}/>
        <Text style = {styles.tekst1}>
        Prezime:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.prezime}/>
        <Text style = {styles.tekst1}>
        Spol:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.spol}/>
        <Text style = {styles.tekst1}>
        Broj indeksa:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.brIndeksa}/>
        <Text style = {styles.tekst1}>
        JMBG:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.jmbg}/>
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Kontakt podaci
        </Text>
        <Text style = {styles.tekst1}>
        Adresa (ulica i broj):
        </Text>
        <TextInput style = {styles.input}
        value = "Adresa (ulica i broj)"/>
        <Text style = {styles.tekst1}>
        Adresa (mjesto):
        </Text>
        <TextInput style = {styles.input}
        value = "Adresa (mjesto)"/>
        <Text style = {styles.tekst1}>
        Kontaks telefon:
        </Text>
        <TextInput style = {styles.input}
        value = "Kontaks telefon"/>
        <Text style = {styles.tekst1}>
        Kontakt e-mail:
        </Text>
        <TextInput style = {styles.input}
        value = "Kontakt e-mail"/>
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Lični podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime oca:
        </Text>
        <TextInput style = {styles.input}
        value = "Ime oca:"/>
        <Text style = {styles.tekst1}>
        Prezime oca:
        </Text>
        <TextInput style = {styles.input}
        value = "Prezime oca"/>
        <Text style = {styles.tekst1}>
        Ime majke:
        </Text>
        <TextInput style = {styles.input}
        value = "Ime majke"/>
        <Text style = {styles.tekst1}>
        Prezime majke:
        </Text>
        <TextInput style = {styles.input}
        value = "Prezime majke"/>
        <Text style = {styles.tekst1}>
        Datum rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = "Datum rođenja"/>
        <Text style = {styles.tekst1}>
        Mjesto rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = "Mjesto rođenja:"/>
        <Text style = {styles.tekst1}>
        Općina rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = "Općina rođenja"/>
        <Text style = {styles.tekst1}>
        Država rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = "Država rođenja"/>
        <Text style = {styles.tekst1}>
        Nacionalnost:
        </Text>
        <TextInput style = {styles.input}
        value = "Nacionalnost"/>
        <Text style = {styles.tekst1}>
        Kanton/regija:
        </Text>
        <TextInput style = {styles.input}
        value = "Kanton/regija"/>
        <Text style = {styles.tekst1}>
        Državljanstvo
        </Text>
        <TextInput style = {styles.input}
        value = "Državljanstvo"/>
    </View>   
    <TouchableOpacity  style = {styles.button}>
        <Text>
        Pošalji zahtjev
        </Text>
    </TouchableOpacity>  
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