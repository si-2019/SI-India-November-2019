import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
// import axios from 'axios';

export default class SortiranjeGodina extends Component {
    racunanjeProsjeka(nizOcjena) {
        var prosjek= 0;
        for (var i = 0; i < nizOcjena.length; i++) {
            prosjek += nizOcjena[i];
        }
        prosjek = parseFloat(prosjek / nizOcjena.length).toFixed(2);
        return prosjek;
    }
    constructor(props) {
        super(props)
        this.state = {
            prva: [6, 6, 6, 7, 6, 9, 8, 8, 8, 6],
            druga: [6, 7, 8, 8, 7, 9, 7, 8, 8, 7, 7, 9],
            treca: [10, 9, 9, 8, 7, 7, 9, 8, 7, 6],
            godine:[]
        }
    }

    componentDidMount() {
        /* axios.get("http://localhost:3000/subjects")
            .then(res => {
                const newSubjects = res.data;
                this.setState({ subjects: newSubjects });
            })
            .then(error => {
                console.error(error);
            }
        ) */
        this.setState({
            godine: getMarks
        });
    }

    render() {
        var prosjekPrve = this.racunanjeProsjeka(this.state.prva);
        var prosjekDruge = this.racunanjeProsjeka(this.state.druga);
        var prosjekTrece = this.racunanjeProsjeka(this.state.treca);
       // var Array_2 = ["Prva godina": prosjekPrve, "Druga godina": prosjekDruge, "Treca godina": prosjekTrece];

        // Sorting array in Descending order.

        var godineProsjek = [
            {
                godina : 'Prva godina',
                prosjek : prosjekPrve
            },
            {
                godina : 'Druga godina',
                prosjek : prosjekDruge
            },
            {
                godina : 'Treća godina',
                prosjek : prosjekTrece
            },
        ];
        godineProsjek.sort(function(a,b){
            return parseInt(b.prosjek)  - parseInt(a.prosjek);
        })
       // Array_2.sort(function(a, b){return b-a});
        console.log(godineProsjek[0].godina);
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 18,  fontWeight: 'bold' }}> Projeci po godinama sortirani</Text>
                <FlatList
                    data = {[
                        {key:godineProsjek[0].godina, value:godineProsjek[0].prosjek},
                        {key:godineProsjek[1].godina, value:godineProsjek[1].prosjek},
                        {key:godineProsjek[2].godina, value:godineProsjek[2].prosjek}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key} : {item.value}</Text>}
                    renderItem={({item}) => <Text style={styles.item}>{item.key} : {item.value}</Text>}
                    renderItem={({item}) => <Text style={styles.item}>{item.key} : {item.value}</Text>}
                />

            </View>
        );
    }
}
const getMarks = [
    {
        id: 1,
        title: 'alma'
    },
    {
        id: 2,
        title: 'alma'
    },
    {
        id: 3,
        title: 'alma'
    }
]
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 15
    },
    item: {
        padding: 5,
        fontSize: 16,
        height: 32,
    }
});