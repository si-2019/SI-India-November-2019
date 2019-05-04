import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View, FlatList,
} from 'react-native';
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
            treca: [10, 9, 9, 8, 7, 7, 9, 8, 7, 6]
        }
    }

    render() {
        var prosjekPrve = this.racunanjeProsjeka(this.state.prva);
        var prosjekDruge = this.racunanjeProsjeka(this.state.druga);
        var prosjekTrece = this.racunanjeProsjeka(this.state.treca);
        var prosjeci    
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 18,  fontWeight: 'bold' }}> Prosjeci po godinama sortirani</Text>

            </View>
        );
    }
}
const getMarks = [
    {
        id: 1,
        title: "Prva godina",
    },
    {
        id: 2,
        title: "Druga godina"
    },
    {
        id: 2,
        title: "Treca godina"
    }
]
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 15
    },
});