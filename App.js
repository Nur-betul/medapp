import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Reminder from './components/Reminder';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>
          Reminders
        </Text>

        {/* <TouchableOpacity
          onPress={() => alert('Reminder created')} style={styles.button}>
            <Text style={styles.buttonText}>Create reminder</Text>
        </TouchableOpacity> */}

        <View style={styles.reminders}>
          {/* This is where reminders list will go. */}
          <Reminder text={'Reminder 1'}/>
          <Reminder text={'Reminder 2'}/>
          {/* Users will be able to see when they will be reminded too. */}
        </View>

      </View>
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
  }
});
