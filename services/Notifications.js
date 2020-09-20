import * as Notifications from 'expo-notifications';

class NotificationHandler {
  
    scheduleNotification(title) {
      if (title == '') title = 'Test Notification'
        Notifications.scheduleNotificationAsync({
            content: {
              title: title
            },
            trigger: { seconds: 10},
          });
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