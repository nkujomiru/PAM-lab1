import React from 'react';
import { StyleSheet, View, Image} from 'react-native';



export default function Picture({route}) {
    console.log ( 'route', route)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: route}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    padding: 5
  },
  image: {
    flex: 1
  }
});