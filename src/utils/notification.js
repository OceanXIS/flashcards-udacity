import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'flash-cards:notifications'

const notificationConfig = {
  title: 'FlashCards',
  body: "don't forget to revise your decks today!",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(async data => {
      if (data !== null) return

      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync()

        Notifications.scheduleLocalNotificationAsync(
          notificationConfig,
          {
            time: getTimestampNoonNextDay(),
            repeat: 'day'
          }
        )
      }
    })
}

function getTimestampNoonNextDay () {
  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(12)
  tomorrow.setMinutes(0)

  return tomorrow
}
