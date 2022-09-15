# React Native Reminder App
## _My First React Native Project_

A React Native CRUD application with a simple reminder form and screen. Instructions to view and interact with the current project version can be found below.

## Technology Stack

- React
- JavaScript
- React Native

## Disclaimers
- No Backend.
- Frontend only.
- No data storage.
- Designed on iPhone.
- Data does not persist.
- Minimal Android design time.

## Features

- A user can create a reminder.
- A user can see when they will be reminded.
- A user can set a reminder to complete in that list.
- A user can see a list of all the reminders they have created.
- A user will receive a local notification five seconds after reminder creation.

## Summary

This application was built as a code challenge, and is my first foray into React Native. I utilized [Expo Go Quickstart](https://reactnative.dev/docs/environment-setup) within the official [React Native Documentation](https://reactnative.dev/docs/getting-started) and read through all visibly pertinent material. Afterwards I read through all pertinent [Expo Documentation](https://docs.expo.dev/get-started/create-a-new-app/) since I decided to leverage it.

##### Expected Behavior
- To add a reminder press the plus icon/button in the upper left hand corner. Doing so will pull up the form where you can create a reminder.
- To exit the form where you can create a reminder press the x icon/button in the upper left hand corner.
- To mark a reminder as complete tap the square and a check will appear to mark it as complete.
- To delete a reminder tap on the reminder itself.
- To see the reminder notification that is automatically set upon reminder creation you must be outside the app itself. The notification will appear with the title 'Reminder' and the reminder text and scheduled date/time as a string.
- Reminder notifications are not tied to the actual date/time itself currently, as the current notification function is a proof of concept.

## Bugs

#### Android OS
- Attempting to schedule the date/time of reminder force closes application.
- UI/UX on some phones overtakes status bar.
- UI/UX on app overtakes some phone status bars.

#### Form - Create Reminder
- Reminder Preview section shows undefined when app initially loads or is reloaded.

#### Screen - Reminders List
- Reminders with completion checkmarks inherit lack of checkmark from above non-completed reminders when deleted.
- Completion check marks don't dissapear when all reminders are marked as completed.

## Tour guide

COMING SOON

## License

MIT