import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export class SubjectsList extends React.Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         subjects: []
      }
    }

    componentDidMount() {
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
                        <Text style={styles.item}>
                            {item.title}
                        </Text>
                    )}
                />
            </View>
        );
    }
}

const getSubjects = [
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

const styles = StyleSheet.create({
    item: {
      padding: 5,
      fontSize: 16,
      height: 32,
    }
});