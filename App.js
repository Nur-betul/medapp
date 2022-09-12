import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Reminder from './components/Reminder';

export default function App() {
  const [reminder, setReminder] = useState();
  const [reminderItems, setReminderItems] = useState([]);

  const handleAddReminder = () => {
    Keyboard.dismiss();
    setReminderItems([...reminderItems, reminder])
    setReminder(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>
          Reminders
        </Text>

        <View style={styles.reminders}>
          {/* This is where reminders list will go. */}
          {
            reminderItems.map((item, index) => {
              return <Reminder key={index} text={item}/>
            })
          }
          {/* Users will be able to see when they will be reminded too. */}
        </View>

      </View>

      {/* Create a reminder */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeReminderWrapper}>
          <TextInput style={styles.input} placeholder={'Create a reminder'} value={reminder} onChangeText={text => setReminder(text)}/>

          <TouchableOpacity onPress={() => handleAddReminder()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  remindersWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "teal",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  reminders: {
    marginTop: 30,
  },
  writeReminderWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#DCDCDC',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#DCDCDC',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
