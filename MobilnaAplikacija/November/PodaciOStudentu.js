import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import axios from 'axios'

export default class PodaciOStudentu extends Component {
  state= { 
  } 

APIpoziv = () =>
{
axios.get("https://httpbin.org/get").then(res =>{
   this.dodajPodatke(res);
})
}
//Kao_student_želim_imati_mogućnost_pregleda_ličnih_podataka_kako_bih_imao_uvid_u_iste

//Privremeno dodavanje dummy podataka
dodajPodatke = (res) => {
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
          />
          <Text style = {styles.tekst1}>
          Prezime:
          </Text>
          <TextInput style = {styles.input}
          />
          <Text style = {styles.tekst1}>
          Spol:
          </Text>
          <TextInput style = {styles.input}
          />
          <Text style = {styles.tekst1}>
          Broj indeksa:
          </Text>
          <TextInput style = {styles.input}
          />
          <Text style = {styles.tekst1}>
          JMBG:
          </Text>
          <TextInput style = {styles.input}
          />
      </View> 
      <View>
        <Text style = {styles.podnaslov}>
        Kontakt podaci
        </Text>
        <Text style = {styles.tekst1}>
        Adresa (ulica i broj):
        </Text>
        <TextInput style = {styles.input}
       />
        <Text style = {styles.tekst1}>
        Adresa (mjesto):
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Kontaks telefon:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Kontakt e-mail:
        </Text>
        <TextInput style = {styles.input}
        />
    </View>
    <View>
        <Text style = {styles.podnaslov}>
        Lični podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime oca:
        </Text>
        <TextInput style = {styles.input}
       />
        <Text style = {styles.tekst1}>
        Prezime oca:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.prezimeOca}/>
        <Text style = {styles.tekst1}>
        Ime majke:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Prezime majke:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Datum rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.datumRod}/>
        <Text style = {styles.tekst1}>
        Mjesto rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.mjestoRod}/>
        <Text style = {styles.tekst1}>
        Općina rođenja:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Država rođenja:
        </Text>
        <TextInput style = {styles.input}
        value = {this.state.drzavaRod}/>
        <Text style = {styles.tekst1}>
        Nacionalnost:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Kanton/regija:
        </Text>
        <TextInput style = {styles.input}
        />
        <Text style = {styles.tekst1}>
        Državljanstvo
        </Text>
        <TextInput style = {styles.input}
        />
    </View>   
      <TouchableOpacity  style = {styles.button} >
          <Text>
          Pošalji zahtjev
          </Text>
      </TouchableOpacity>  
   </ScrollView>
  );
  }
  }
  
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
    backgroundColor: '#195dc4',
    color: 'white',
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