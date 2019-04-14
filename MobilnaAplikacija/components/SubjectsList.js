import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export class SubjectsList extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         subjects: []
      }
    }

    // dobavljanje podataka sa API
    componentDidMount() {
        /* axios.get("http://localhost:3000/subjects")
            .then(res => {
                this.setState({ 
                    subjects: res.data 
                });
            })
            .then(error => {
                console.error(error);
            }
        ) */
        /* const subjectsList = this._getSubjectsApiAsync();
        this.setState({
            subjects: subjectsList
        }); */
    }

    render() {
        return (
            <View style={styles.subjectsContainer}>
                <FlatList 
                    data={subjects}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>
                            {item.title}
                        </Text>
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

    _getSubjectsApiAsync() {
        return fetch('http://localhost:3000/subjects')
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
    }
}

const styles = StyleSheet.create({
    subjectsContainer: {
        paddingTop: 100,
        backgroundColor: 'skyblue'
    },
    item: {
        padding: 5,
        fontSize: 16,
        height: 28
    }
});

const subjects = [
    {
        id: 1,
        title: "Organizacija softverskog projekta"
    },
    {
        id: 2,
        title: "Projektovanje informacionih sistema"
    },
    {
        id: 3,
        title: "Softver inženjering"
    },
    {
        id: 4,
        title: "Vještačka inteligencija"
    },
    {
        id:5,
        title: "Završni rad"
    }
]