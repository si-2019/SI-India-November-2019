import React from "react";
import { View, Text } from "react-native";
const ProgressBar = (props) => {
    state = {
        ukupnoBodova: 0
      };
    return (
        <View>
            {props.zadace.map((zadaca, index) => {
                    this.state.ukupnoBodova = this.state.ukupnoBodova + zadaca.bodovi
            })}
            <Text>Osvojili ste: {this.state.ukupnoBodova} </Text>
        </View>
    );
};

export default ProgressBar;