// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'purple', fontsize: 18}}>
        To create a reminder, just press the button below!
      </Text>
      {/* <StatusBar style="auto" /> */}

      <TouchableOpacity
        onPress={() => alert('Hello world!')}
        style={{backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 20, color: '#fff'}}>Create reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
