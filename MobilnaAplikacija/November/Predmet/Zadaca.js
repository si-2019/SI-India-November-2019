import React from 'react'
import {Text} from 'react-native';

const Zadaca = (props) => {
    console.log(props.zadaca);
    const {naziv,bodovi}=props.zadaca;
    return (
        <Text>{naziv}:{bodovi} bodova</Text>
    )
}

export default Zadaca;