import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

const StandartButton = ({buttonTitle, iconName, action}) =>{
return(
    <TouchableOpacity 
    style ={styles.backgroundStyle}
    onPress = {action}
    >
        <Feather name = {iconName} style={styles.iconStyle} />
        <Text style = {styles.inputStyle}>
            {buttonTitle}
        </Text>

    </TouchableOpacity>
);}

const styles = StyleSheet.create({
    backgroundStyle: 
    {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#DDDDDD',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle:{
        flex:1,
        fontSize:18,
        marginRight: 2       
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal:6
    }
});

export default StandartButton;