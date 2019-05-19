import React from 'react';

import { Alert, Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import moment from 'moment';
let inicijalni = { ispiti_info: [] }
let notifikacije = true;
export default class AktivniIspiti extends React.Component {
    constructor(props) {
        super(props);
        this.state = inicijalni
        inicijalizovanjeIspita = () => {
            this.setState(inicijalni)
        }
    }
    promijeniTekstButtona = i => {
        this.setState(state => {
            const list = state.ispiti_info.map((item, j) => {
                if (j === i) {
                    if (item.prijavaTekst === 'Prijavi')
                        item.prijavaTekst = 'Odjavi'
                    else
                        item.prijavaTekst = 'Prijavi'
                    return item;
                } else {
                    return item;
                }
            });

            return {
                list,
            };
        });
    };

    render() {

        let ispiti = [{ id: 0, predmet: "Vjestacka inteligencija", tip: "Prvi parcijalni", datum: "10.2.2019. 13:00", aktivan: 1, prijavljen: 1, popunjen: 0 },
        { id: 1, predmet: "Organizacija softverskog projekta", tip: "Drugi parcijalni", datum: "13.6.2019. 18:00", aktivan: 1, prijavljen: 0, popunjen: 0 },
        { id: 2, predmet: "Softverski inzenjering", tip: "Prvi parcijalni", datum: "15.6.2019. 10:30", aktivan: 0, prijavljen: 1, popunjen: 0 },
        { id: 3, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan: 1, prijavljen: 0, popunjen: 0 },
        { id: 4, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan: 1, prijavljen: 1, popunjen: 0 }];

        let k = 0;
        ispiti.map((ispit) => {
            let porukaa;
            if (ispit.prijavljen) porukaa = 'Odjavi'
            else porukaa = 'Prijavi'
            inicijalni.ispiti_info[k] = { ind: k, id: ispit.id, prijavaTekst: porukaa }
            k++;
        })
        this.inicijalizovanjeIspita;
        let j, greska;
        ispisAktivnihIspita = ispiti.map((ispit) => {
            const dateLimit = moment(ispit.datum, 'DD.MM.YYYY hh:mm');
            const now = moment();

            if (ispit.aktivan && dateLimit.isValid() && !now.isAfter(dateLimit)) {
                return (

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.predmet}</Text></View>
                        <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.tip}</Text></View>
                        <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.datum}</Text></View>
                        <View style={styles.elementi_tabele}>
                            <TouchableOpacity  >
                                <Text style={[styles.elementi_tabele_tekst, { color: 'blue' }]} onPress={() => {
                                    j = ispiti.indexOf(ispit);
                                    greska = 0;
                                    ispiti.map((item) => {
                                        if (item.id != ispit.id && item.predmet === ispit.predmet && item.tip === item.tip && item.prijavljen == 1) {
                                            greska = 1;
                                        }
                                    });
                                    if (greska) {
                                        alert('Prijavljeni ste na drugi termin ovog ispita, odjavite ga kako bi se mogli prijavili na ovaj!');
                                    }
                                    else if (ispit.prijavljen) {
                                        ispiti[j].prijavljen = 0;
                                        console.log(j)
                                        this.promijeniTekstButtona(j);
                                        alert('Ispit odjavljen!');
                                    }
                                    else {
                                        ispiti[j].prijavljen = 1;
                                        console.log(j)
                                        this.promijeniTekstButtona(j);
                                        alert('Ispit prijavljen!');
                                    }

                                }} >{this.state.ispiti_info[ispiti.indexOf(ispit)].prijavaTekst}</Text>
                            </TouchableOpacity></View>
                        {/* <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst} onPress={this.handleClick} color = 'blue'>{prijava}</Text></View>
            <Button onPress={this.handleClick} title={prijava} type="clear" />*/}
                    </View>

                );


            }

        })

        return (

            <View style={styles.container}>
                <View style={styles.header_container}>
                    <View style={styles.header}><Text style={styles.header_tekst}>Predmet</Text></View>
                    <View style={styles.header}><Text style={styles.header_tekst}>Tip</Text></View>
                    <View style={styles.header}><Text style={styles.header_tekst}>Datum</Text></View>
                    <View style={styles.header}><Text style={styles.header_tekst}>Prijava</Text></View>
                </View>
                <View>
                    {ispisAktivnihIspita}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 1, 
      flexDirection: 'column'
    },
    elementi_tabele_tekst:{
      textAlign: 'center',
      paddingTop:5, 
    },
    elementi_tabele:{ 
      flex: 1, 
      alignItems:'center' 
  },
    header_tekst:{
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      top: '20%',
      bottom: '20%'
    },
    header_container:{
      flexDirection: 'row', 
      justifyContent:'space-between', 
      paddingTop: 10,
      paddingBottom: 10
    },
    header:{
      flex: 1,
      textAlign: 'center'
    }, 
  });