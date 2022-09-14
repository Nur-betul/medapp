import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Modal } from 'react-native';
import Reminder from './components/Reminder';
import { Button } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reminder, setReminder] = useState();
  const [reminderItems, setReminderItems] = useState([]);

  const handleAddReminder = () => {
    Keyboard.dismiss();
    setReminderItems([...reminderItems, reminderFormatted]);
    setReminder(null);
  }
  
  const deleteReminder = (index) => {
    let itemsCopy = [...reminderItems];
    itemsCopy.splice(index, 1);
    setReminderItems(itemsCopy);
  }
  
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const reminderFormatted = reminder + ' ' + date;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>

          <Modal 
            visible={modalOpen} 
            animationType='slide'
            >
            <View style={styles.modalStyle}>
              <View>
                <Text style={styles.sectionTitle}>
                  Form - Create Reminder
                </Text>
                <View>
                  <Ionicons name="close" size={32} onPress={() => setModalOpen(false)} />
                </View>
              </View>
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <Text>Write Reminder:</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder={'Take meds, walk dog, brush teeth, etc.'} 
                    placeholderTextColor='grey'
                    value={reminder} 
                    onChangeText={text => setReminder(text)}
                  />
                  <View>
                   <Text>Set Date and Time:</Text>
                     <MaterialIcons name="date-range" size={32} onPress={showDatePicker} />
                  </View>
                  <Text>
                    Reminder Preview: {reminder + ' - ' + date}
                  </Text>
                  <Button title='Submit' onPress={() => handleAddReminder() & setModalOpen(false)} />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='datetime'
                    display='inline'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
              </KeyboardAvoidingView>
            </View>
          </Modal>

      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>
          Screen - Reminders List
        </Text>
        <View>
          <Ionicons name="add" size={32} onPress={() => setModalOpen(true)} />
        </View>
        <View style={styles.reminders}>
          {
            reminderItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteReminder(index)}>
                  <Reminder text={item}/>
                </TouchableOpacity>
              )
            })
          }
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 25,
  },
  remindersWrapper: {
    paddingHorizontal: 20,
  },
  reminders: {
    marginTop: 10,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
  },
  modalStyle: {
    paddingHorizontal: 20,
  }
});