import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const TextInputField = ({term, onChange, onSubmit}) =>{
return(
    <View style ={styles.backgroundStyle}>
        <Feather name = 'search' style={styles.iconStyle} />
        <TextInput
        value = {term}
        onChangeText = {onChange}
        placeholder = "Enter text for search or notification"
        autoCapitalize = 'none'
        autoCorrect = {false}
        onEndEditing = {onSubmit}
        style = {styles.inputStile}
        ></TextInput>
    </View>
);
}

const styles = StyleSheet.create({
    backgroundStyle: 
    {
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#DDDDDD',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row'
    },
    inputStile:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize: 27,
        alignSelf: 'center',
        marginHorizontal:7
    }
});

export default TextInputField;