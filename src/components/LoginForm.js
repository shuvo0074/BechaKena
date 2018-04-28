import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <Text style={styles.fonts}> Login here</Text>
        <TextInput
        placeholder="   User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        />
        <TextInput
        style= {styles.input}
        placeholder='   password'
        placeholderTextColor='#27ae60'
        />
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonFonts}>
          Login
        </Text>
        </TouchableOpacity>
      </View>
      
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
      height: 40, 
      width: 250, 
      backgroundColor: '#1e3799', 
      alignItems: 'center', 
      borderRadius: 5,
      borderWidth: 2,
      margin: 10,
    },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#192a56',
      marginRight: 150
    },
    buttonStyle: {
      margin: 10,
      width: 80,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#1e3799',
      marginLeft: 180,
      padding: 5,
    },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 15,
    }
});
