import * as Notifications from 'expo-notifications';
import { Platform} from 'react-native'; 
import * as Permissions from 'expo-permissions'

class NotificationHandler {
  async scheduleNotification(title) {
    if (title == '') title = 'Test Notification';
    await requestPermissions();
    
    console.log("Scheduled notification");
    Notifications.scheduleNotificationAsync({
      content: {
        title: title
      },
      trigger: { seconds: 1},
    });
  }
  
}

const checkPermissions = async () => {
  // getPermissionsAsync - Returns an object representing permission settings (NotificationPermissionsStatus)
  const settings = await Notifications.getPermissionsAsync();
  const isGranted =     
  settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
console.log('isGranted',isGranted);

  return isGranted

}

const requestPermissions = async () => {
  // If permissions not enabled - request
  if (! await checkPermissions){
    console.log("Requesting permissions for notifications");

    if (Platform.OS === "ios") {
      const response = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      const status = response.status;
      if (status !== "granted") {
        await Permissions.askAsync(Permissions.NOTIFICATIONS);
      }
    } else {
      // Options docs: https://docs.expo.io/versions/latest/sdk/notifications/#arguments-8 
      await Notifications.requestPermissionsAsync();
    }
  }

  if (! await checkPermissions){
    // TODO handle permissions not allowed
  }
}


  
const notificationHandler = new NotificationHandler();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default notificationHandler;