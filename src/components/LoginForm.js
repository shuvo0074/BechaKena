import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Login form</Text>
        <TextInput
        style= {styles.input}
        defaultValue='User Name'
        />
        <TextInput
        style= {styles.input}
        defaultValue='password'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      height: 20, 
      width: 250, 
      backgroundColor: '#1e3799', 
      alignItems: 'center', 
      padding: 20,
      borderRadius: 5,
      margin: 10,
    },
});
