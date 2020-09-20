import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CustomRadioButton = ({value, state, setState}) => {
  return (
    <View style = {styles.radioButton}>
      <RadioButton
        value={value}
        status={ state.value == value ? 'checked' : 'unchecked' }
        onPress={() => {
          setState({value})
        }}
      />

      <Text style = {styles.inputStyle}>
          {value}
      </Text>      
    </View>
  );
};

const styles = StyleSheet.create({
    radioButton: {
      flex : 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginVertical : 5,
      marginHorizontal : 10
    },
    inputStyle:{
      fontSize:28,
      fontWeight: "bold",
  },
});

export default CustomRadioButton;