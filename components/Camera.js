import { View , Text, StyleSheet} from "react-native"
import { Camera } from 'expo-camera';
import React, { useState, useEffect }  from 'react';
import CameraOrientation from '../enums/CameraOrientations'


export default MyCamera = ({cameraIsOpen, cameraOrientation, cameraRef}) =>
{
	useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const [hasPermission, setHasPermission] = useState(null);
  // const [hasPermission, setHasPermission] = useState(true);



	Camera.Constants.Type.back
  if (hasPermission === null) 
		return( <View style={styles.container}><Text>No Permissions</Text></View>)
	else if (hasPermission === false)
    return ( <View style={styles.container}><Text>No access to camera</Text></View>)
  else{
		return (
			<View style={styles.container}>
			{
				cameraIsOpen ? 
					<Camera 
					style={styles.camera} 
					type={cameraOrientation.value === CameraOrientation.Back ? Camera.Constants.Type.back : Camera.Constants.Type.front}
					ref ={cameraRef}
					// useCamera2Api = {true}
					>
					</Camera> 
					: <Text style={styles.container}>Camera is disabled!</Text>
			} 
			</View>
		)

	} 
	
}

export const takePicture = async (cameraRef) => {      
	if (cameraRef.current) {
		cameraRef.current.takePictureAsync({ onPictureSaved: onPictureSaved });
	}
};
const onPictureSaved = photo => {
	navigation.navigate('Picture', {url: photo.uri});
} 



const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    padding: 5
  },
  camera: {
    flex: 1,
    marginVertical: 10
  }  
});