import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,} from 'react-native';
import { Router,Stack,Scene,Actions} from 'react-native-router-flux'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullName: [],tempFullName: '',passWord: [],tempPassWord: '',};
  }
  onPressRegisterButton(){
    Actions.accepted()
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} >        
        <Text style={styles.fonts}> Give your informations here</Text>
        <TextInput
        style= {styles.input}
        placeholder='   Full name'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "fName"
        returnKeyType='next'
        ref= {(input)=> this.fullNameInput=input }
        onSubmitEditing={()=> this.userNameInput.focus()}
        />

        <TextInput
        placeholder="   User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        returnKeyType='next'
        ref = "uName"
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {

            }
          }
        )}
        ref= {(input)=> this.userNameInput=input }
        onSubmitEditing={()=> this.passwordInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder='   password'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "pas"
        returnKeyType='next'
        ref= {(input)=> this.passwordInput=input }
        onSubmitEditing={()=> this.addressInput.focus()}
        />

        <TextInput
        style= {styles.input}
        placeholder='   address'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "addr"
        returnKeyType='next'
        ref= {(input)=> this.addressInput=input }
        onSubmitEditing={()=> this.eMailInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder='   email'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "email"
        returnKeyType='go'
        ref= {(input)=> this.eMailInput=input }
        onSubmitEditing={()=> this.phoneInput.focus()}
        />

        <TextInput
        style= {styles.input}
        placeholder='   Phone'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "phone"
        returnKeyType='go'
        ref= {(input)=> this.phoneInput=input }
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressRegisterButton} 
        ref= {(input)=> this.submitButton=input }
        >
        <Text style={styles.buttonFonts}>
          Register
        </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2461',
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
      borderColor: '#192a56',
      margin: 10,
    },
    fonts: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center',
      padding: 20,
      marginTop: 100,
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
      flex: 1,
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 10,
    }
});
