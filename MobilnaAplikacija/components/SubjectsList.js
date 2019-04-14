import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export class SubjectsList extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         subjects: []
      }
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