import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';

class ZavrsniIspitIzvjestaj extends Component {

    // default State object
    state = {
        subjects: []
    };

    componentDidMount() {
        //ovdje ide localhost ako se testira preko emulatora na PC-ju, http://localhost:31914/predmeti/1/ukupnoBodova
        //a ako se testira preko expo, staviti ip adresu svog racunara

        axios
            .get("http://192.168.0.16:31914/predmeti/1/zavrsniIspit")
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
            <ScrollView >
                <FlatList
                    data={this.state.subjects}
                    keyExtractor={item => item.predmet.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.Viewitem}>
                            <View style={styles.Viewitem1}>
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
            </ScrollView>
        );
    }

}
//Hardkodirani podaci Za slučaj kad se ne može konektovati na bazu
export default ZavrsniIspitIzvjestaj;
const getSubjects = [
    {
        predmet: "Organizacija softverskog projekta",
        bodovi : 20
    },
    {
        predmet: "Vještačka inteligencija",
        bodovi : 35
    },
    {
        predmet: "Softver inženjering",
        bodovi : 28
    }
]
const styles = StyleSheet.create({
    item: {
        padding: 5,
        margin: 5,
        fontSize: 16,
        height: 80,
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
        justifyContent: 'flex-start',
        width: '70%'
    },
    Viewitem2: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#ededed",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

