import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputField from './components/TextInput'
import StandartButton from './components/Button'
import Notification from './services/Notifications'

export default function App() {
  const [text, setText] = useState('');
  const [cameraIsOpen, switchCamera] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInputField
      term = {text}
      onChange = {setText}
      onSubmit = {()=>{
       console.log(text) 
        setText('')}
      }
      >


      </TextInputField>

      <View style = {styles.buttons}>
        <StandartButton
          buttonTitle = {!cameraIsOpen ? 'Enable Camera' : 'Disable Camera'}
          iconName = 'camera'
          action = {()=>{
            console.log('Enable tapped ', cameraIsOpen)
            switchCamera(!cameraIsOpen)
          }}/>
        <StandartButton
          buttonTitle = 'Capture'
          iconName = 'aperture'
          action = {()=>{}}
          />

      </View>

      <View style = {styles.radioButtons}> 
        <Text>Radio Buttons</Text>
      </View>

      <View style = {styles.buttons}>
          <StandartButton
          buttonTitle = 'Notification'
          iconName = 'bell'
          action = {()=>{
            Notification.scheduleNotification(title = 'Hello')
          }}
          />

          <StandartButton
          buttonTitle = 'Search'
          iconName = 'search'
          action = {()=>{}}
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    flex: 1,
    // marginTop: 10,
    // marginBottom: 20,
    // marginLeft: 5,
    // marginRight: 5,
    backgroundColor: '#505050'
  },
  radioButtons: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'red'
  },
  radioButton: {
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'space-around'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'orange',
    justifyContent: 'space-around'
  }
});
