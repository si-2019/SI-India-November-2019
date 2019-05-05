import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity
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
            treca: [10, 9, 9, 8, 7, 7, 9, 8, 7, 6],
            godine:[],
            semestri: [],
            nesortiraniSemestri: 1,
            tekstButtonaSortSemestre: "Prikaži semestre sortirano po prosjeku"
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
            godine: getMarks,
            semestri: getSemester
        });
    }
    promjenaSemestara = (data) => {
        if(data=='1') {
        this.setState({ 
            nesortiraniSemestri: data,
            tekstButtonaSortSemestre: "Prikaži semestre sortirano po prosjeku"
         });
        }
        else  {
        this.setState({ 
            nesortiraniSemestri: data,
            tekstButtonaSortSemestre: "Prikaži semestre redom"
            });
        }
    }
    render() {
        var prosjekPrve = this.racunanjeProsjeka(this.state.prva);
        var prosjekDruge = this.racunanjeProsjeka(this.state.druga);
        var prosjekTrece = this.racunanjeProsjeka(this.state.treca);
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
        var godineProsjekNesortirano=Object.assign({}, godineProsjek); //Dodajemo vrijednost objekta, ne referencu

        var prviSemestar = this.racunanjeProsjeka(this.state.prva.slice(0, this.state.prva.length/2));
        var drugiSemestar = this.racunanjeProsjeka(this.state.prva.slice(this.state.prva.length/2, this.state.prva.length));
        var treciSemestar = this.racunanjeProsjeka(this.state.druga.slice(0, this.state.druga.length/2));
        var cetvrtiSemestar = this.racunanjeProsjeka(this.state.druga.slice(this.state.druga.length/2, this.state.druga.length));
        var petiSemestar = this.racunanjeProsjeka(this.state.treca.slice(0, this.state.treca.length/2));
       
        var semestriProsjek = [
            {
                id: 1,
                title: ' 1. semestar: ',
                prosjek: prviSemestar
            },
            {
                id: 2,
                title: ' 2. semestar: ',
                prosjek: drugiSemestar
            },
            {
                id: 3,
                title: ' 3. semestar: ',
                prosjek: treciSemestar
            },
            {
                id: 4,
                title: ' 4. semestar: ',
                prosjek: cetvrtiSemestar
            },
            {
                id: 5,
                title: ' 5. semestar: ',
                prosjek: petiSemestar
            }
            
        ];
        var semestriProsjekNesortirano = [
            {
                id: 1,
                title: ' 1. semestar: ',
                prosjek: prviSemestar
            },
            {
                id: 2,
                title: ' 2. semestar: ',
                prosjek: drugiSemestar
            },
            {
                id: 3,
                title: ' 3. semestar: ',
                prosjek: treciSemestar
            },
            {
                id: 4,
                title: ' 4. semestar: ',
                prosjek: cetvrtiSemestar
            },
            {
                id: 5,
                title: ' 5. semestar: ',
                prosjek: petiSemestar
            }
            
        ];

        godineProsjek.sort(function(a,b){
            return parseFloat(b.prosjek)  - parseFloat(a.prosjek);
        })
        semestriProsjek.sort(function(a,b){
            return parseFloat(b.prosjek)  - parseFloat(a.prosjek);
        })
        prosjeciPoSemestruSort = (
            <View>
            <Text style={{ fontSize: 18,  fontWeight: 'bold', marginTop: 10 }}> Prosjeci po semestrima sortirani{"\n"}</Text>
            <FlatList
                data={semestriProsjek}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <Text style={styles.item}>
                        {item.title} {item.prosjek}
                    </Text>
                )}                     
            />
            </View>
        )
        
        prosjeciPoSemestruNesort = (
            
            <View>
            <Text style={{ fontSize: 18,  fontWeight: 'bold', marginTop: 10 }}> Prosjeci po semestrima{"\n"}</Text>
            <FlatList
            data={semestriProsjekNesortirano}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <Text style={styles.item}>
                        {item.title} {item.prosjek}
                    </Text>
                )}                    
            />
            </View>
            
        )
        return (
            <ScrollView style={styles.MainContainer}>  
                <View>
                    <Text style={{ fontSize: 18,  fontWeight: 'bold'}}> Prosjeci po godinama{"\n"}</Text>
                    <FlatList
                        data = {[
                            {key:godineProsjekNesortirano[0].godina, value:godineProsjekNesortirano[0].prosjek},
                            {key:godineProsjekNesortirano[1].godina, value:godineProsjekNesortirano[1].prosjek},
                            {key:godineProsjekNesortirano[2].godina, value:godineProsjekNesortirano[2].prosjek}
                        ]}
                        renderItem={({item}) => (
                            <Text style={styles.item}>
                                {item.key}: {item.value}
                            </Text>
                        )}                     
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 18,  fontWeight: 'bold', marginTop: 10}}> Prosjeci po godinama sortirani{"\n"} </Text>
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
                <View>
                {this.state.nesortiraniSemestri == '1' ? prosjeciPoSemestruNesort : prosjeciPoSemestruSort}
                </View>
                <View>
                     <TouchableOpacity 
                     onPress={()=>{
                        if(this.state.nesortiraniSemestri=='1')
                        this.promjenaSemestara('2')
                        else
                        this.promjenaSemestara('1')}} 
                     style = {styles.button} >
                        <Text>
                        {this.state.tekstButtonaSortSemestre}
                        </Text>
                    </TouchableOpacity> 
                </View>
                
            </ScrollView>
        );
    }
}
const getMarks = [
    {
        id: 1,
        title: 'Prva'
    },
    {
        id: 2,
        title: 'Druga'
    },
    {
        id: 3,
        title: 'Treća'
    }
]

const getSemester = [
    {
        id: 1,
        title: '1.'
    },
    {
        id: 2,
        title: '2.'
    },
    {
        id: 3,
        title: '3.'
    },
    {
        id: 4,
        title: '4.'
    },
    {
        id: 5,
        title: '5.'
    }
] 

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 15,
        padding: 20
    },
    item: {
        padding: 5,
        fontSize: 16,
        height: 32,
    },
    button: {
        backgroundColor: 'lightgrey', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        padding: 12,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 20
    }
});