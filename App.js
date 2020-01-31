import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    // style expects a JS object and we can use numbers for padding 
    // without specifying the value
    <View style={{ padding: 50 }}>
      <View>
        <TextInput 
          placeholder="Course Goal" 
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
        <Button title="Press Me"/>
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
