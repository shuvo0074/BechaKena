import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import LogForm from './LoginForm'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style= {{flex: 5,margin: 50,fontSize: 20, padding:10, }}>
        Login here
        </Text>
        <View style={styles.logoContainer}>
        <Image 
        source = {require('../contents/login.png')}
        />
        </View>
        <View style={styles.formContainer}>
        <LogForm
        
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ae60',
    alignItems: 'center',
  },
  logoContainer:{
      flex: 5,
  },
  formContainer:{

  },

});
