import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Modal, Image } from 'react-native';
import Reminder from './components/Reminder';
import { Button } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Notifications from 'expo-notifications';

export default function App() {
  const handleNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'İlaç Hatırlatma',
        body: reminder + ' - ' + date
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [reminder, setReminder] = useState();
  const [reminderItems, setReminderItems] = useState([]);

  const handleAddReminder = () => {
    Keyboard.dismiss();
    setReminderItems([...reminderItems, reminderFormatted]);
    setReminder(null);
  };
  
  const deleteReminder = (index) => {
    let itemsCopy = [...reminderItems];
    itemsCopy.splice(index, 1);
    setReminderItems(itemsCopy);
  };
  
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const reminderFormatted = reminder + ' ' + date.toString();


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDatePickerVisibility(Platform.OS === 'ios');
    setDate(currentDate);
    hideDatePicker();
  };
  

  return (
    <View style={styles.container}>
      <Modal 
        visible={modalOpen} 
        animationType='slide'
      >
        <View style={styles.modalStyle}>
          <View style={styles.header}>
            <Text style={styles.sectionTitle}>
              İlaç Alarmı Ekle
            </Text>
            <Image
              source={{ uri: 'https://ltuangxwymejnflvtrws.supabase.co/storage/v1/object/public/medicines/pngwing.com__3_.png' }}
              style={styles.image}
            />
            <View>
              <Ionicons name="close" size={32} onPress={() => setModalOpen(false)} />
            </View>
          </View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text>İlaç Ekle:</Text>
            <TextInput 
              style={styles.input} 
              placeholder={'İlaç adını buraya yazınız'} 
              placeholderTextColor='grey'
              value={reminder} 
              onChangeText={text => setReminder(text)}
            />
            <View>
              <Text>Tarih ve zamanı giriniz:</Text>
              <MaterialIcons name="date-range" size={32} onPress={showDatePicker} />
            </View>
            <Text>İlaç önizlemesi: {reminder + ' - ' + date}</Text>
            <Button title='EKLE' onPress={() => {handleAddReminder(); handleNotification(); setModalOpen(false);}} />

            <DateTimePickerModal
  isVisible={isDatePickerVisible}
  mode='datetime'
  display='default'
  onConfirm={handleConfirm}
  onCancel={hideDatePicker}
/>

           
          </KeyboardAvoidingView>
        </View>
      </Modal>

      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>
          Ana Ekran - İlaç Listesi
        </Text>
        <View>
          <Ionicons name="add" size={32} onPress={() => setModalOpen(true)} />
        </View>
        <View style={styles.reminders}>
          {reminderItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => deleteReminder(index)}>
              <Reminder text={item} />
            </TouchableOpacity>
          ))}
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },
});

