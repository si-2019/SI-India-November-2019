import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// import axios from 'axios';

export class SubjectsList extends React.Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         subjects: []
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
            subjects: getSubjects
        });
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.subjects}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity >
                            <Text style={styles.item} onPress={()=>this.props.navigation.navigate("Predmet",item)}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }

    _getSubjectsFromApi = async (endpoint) => {
        try {
          const response = await fetch(endpoint);
          const data = await response.json();
          return data;
        }
        catch(error) {
          console.error(error);
        }
    }
}

const getSubjects = [
    {
        id: 1,
        title: "Organizacija softverskog projekta",
        profesor:"Profesor OSP",
        ECTS:"4",
        asistenti:"Asistent"
    },
    {
        id: 2,
        title: "Projektovanje informacionih sistema",
        profesor:"Profesor PIS",
        ECTS:"4",
        asistenti:"Asistent"
    },
    {
        id: 3,
        title: "Softver inženjering",
        profesor:"Profesor SI",
        ECTS:"4",
        asistenti:"Asistent"
    },
    {
        id: 4,
        title: "Vještačka inteligencija",
        profesor:"Profesor VI",
        ECTS:"4",
        asistenti:"Asistent"
    },
    {
        id:5,
        title: "Završni rad",
        profesor:"Profesor ZR",
        ECTS:"4",
        asistenti:"Asistent"
    }
]

const styles = StyleSheet.create({
    item: {
      padding: 5,
      fontSize: 16,
      height: 32,
    }
});