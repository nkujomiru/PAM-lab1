import { Linking, Alert } from "react-native";

export default handleClick = (userInput) => {
    
    if (userInput == '') userInput = 'Test Search'
    let urlAddress = 'https://www.google.com/search?q=' + userInput;
    Linking.canOpenURL(urlAddress).then(supported => {
    if (supported) {
        Linking.openURL(urlAddress);
    } else {
        console.log("Don't know how to open URI: " + urlAddress);
        Alert.alert(title = 'Error', message = 'Can\'t open link: ' + urlAddress)
    }
    });
};
