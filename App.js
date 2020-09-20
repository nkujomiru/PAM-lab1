import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputField from './components/TextInput'
import StandartButton from './components/Button'
import Notification from './services/Notifications'
import OpenInBrowser from './services/OpenUrl'
import CameraOrientation from './enums/CameraOrientations'
import CustomRadioButton from './components/CustomRadioButton'

export default function App() {
  const [text, setText] = useState('');
  const [cameraIsOpen, switchCamera] = useState(false);
  const [cameraOrientation, setCameraOrientation] = useState(CameraOrientation.Back);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* // Fill blank space */}
      <View style={{flex: 1}}/>

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
        <CustomRadioButton
          value = {CameraOrientation.Back}
          state = {cameraOrientation}
          setState = {setCameraOrientation}
        />
        <CustomRadioButton
          value = {CameraOrientation.Front}
          state = {cameraOrientation}
          setState = {setCameraOrientation}
        />
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
          action = {()=>{OpenInBrowser(text)}}
          />
      </View>

      <TextInputField
        term = {text}
        onChange = {setText}
        onSubmit = {()=>{
          console.log(text) 
          }} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  }
});
