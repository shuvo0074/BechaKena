import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView,KeyboardAvoidingView } from 'react-native';
import LogForm from './LoginForm'

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style= {{flex: 5,margin: 50,fontSize: 20, padding:10, }}>
        Login here
        </Text>
        <View style={styles.logoContainer}>
        <Image 
        source = {require('../contents/login.png')}
        />
        </View>
        <View style={styles.formContainer}>
        <LogForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0984e3',
    alignItems: 'center',
  },
  logoContainer:{
      flex: 5,
  },
  formContainer:{

  },

});
