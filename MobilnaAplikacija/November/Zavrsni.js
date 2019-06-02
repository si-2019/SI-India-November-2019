import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,Button} from 'react-native';
import  ReadMore from 'react-native-read-more-text';
import { DocumentPicker} from 'expo';
class Zavrsni extends React.Component {

    render() {
        return (
            <View>
                <Text style={{ fontSize: 18,  fontWeight: 'bold'}}>Tema: Naziv teme</Text>
                <Text style={{fontSize: 18,  fontWeight: 'bold'}}>Mentor: prof. dr. John Doe </Text>
                <Text>{"\n"}</Text>
                <Text style={{fontSize: 18,  fontWeight: 'bold'}}>Sažetak teme: </Text>
                <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={this.prikaziVise}
                    renderRevealedFooter={this.prikaziManje}
                >
                <Text style={{ fontSize: 15}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes nascetur. Elementum integer enim neque volutpat ac tincidunt vitae semper. Praesent semper feugiat nibh sed pulvinar proin. Nec feugiat nisl pretium fusce id velit ut. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Quis varius quam quisque id diam vel quam elementum. Sodales neque sodales ut etiam sit amet.
                 </Text>
                </ReadMore>

                <Button
                    title="Odaberi dokument"
                    onPress={this.odaberiDokument}
                />
            </View>
        )
    }
    prikaziVise = (handlePress) => {
        return (
            <Text style={{  color: 'blue', marginTop: 5}} onPress={handlePress}>
                Prikaži više
            </Text>
        );
    }
    prikaziManje = (handlePress) => {
        return (
            <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
                Prikaži manje
            </Text>
        );
    }
    odaberiDokument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
    }
}

export default Zavrsni;
