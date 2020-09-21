import { Linking } from "react-native";

const address = "support@MyApp.com";
const body = '\n\n---\nSent from my react-native app'

export const composeEmail = (subject) =>{
Linking.openURL(
    `mailto:${address}?subject=${subject}&body=${body}`) 
};