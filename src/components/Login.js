import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity,Alert } from 'react-native';
import { Router,Stack,Scene,Actions} from 'react-native-router-flux'

export default class Login extends React.Component {
  onPressSignUpButton(){
    Actions.signup()
 }
 onPressLoginButton(){
    Actions.accepted()
 }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.sView}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
        <Image 
        source = {require('../contents/login.png')}
        />
        </View>
        <View style={styles.formContainer}>
        <View style={styles.innercontainer}>
        
        <Text style={styles.fonts}> Login here</Text>
        
        <TextInput
        placeholder="   User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        returnKeyType='next'
        onSubmitEditing={()=> this.passwordInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder='   password'
        placeholderTextColor='#27ae60'
        secureTextEntry
        returnKeyType='go'
        ref= {(input)=> this.passwordInput=input }
        />
        
        <View style={{flexDirection: 'row',justifyContent: 'space-evenly',}}>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressSignUpButton} >
        <Text style={styles.buttonFonts}>
          Sign up
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLoginButton} >
        <Text style={styles.buttonFonts}>
          Login
        </Text>
        </TouchableOpacity>
        
        </View>

      </View>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  innercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex:1,
    backgroundColor: '#0c2461',
    alignItems: 'center',
    
  },
  logoContainer:{
    flex: 1,
    padding: 60
  },
  formContainer:{
    flex:1,
  },
  input: {
    height: 40, 
    width: 250, 
    backgroundColor: '#1e3799', 
    alignItems: 'center', 
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#192a56',
    margin: 10,
  },
  fonts: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27ae60',
    marginRight: 150
  },
  buttonStyle: {
    margin: 10,
    height: 30,
    width: 80,
    borderWidth: 3,
    borderColor: '#192a56',
    borderRadius: 5,
    backgroundColor: '#1e3799',
    paddingTop: 2,
    },
  buttonFonts: {
    fontWeight: 'bold',
    color: '#27ae60',
    fontSize: 15,
    paddingLeft: 15,
  },
  sView: {
    flex: 1,
    justifyContent: 'center',
  }

});
