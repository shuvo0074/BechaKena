import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,Dimensions} from 'react-native';
import { Router,Stack,Scene,Actions} from 'react-native-router-flux'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    fullName: [],tempFullName: " " ,
    userName: [],tempUserName: " " ,
    passWord: [],tempPassword: " " ,
    address: [],tempAddress: " " ,
    eMail: [],tempEmail: " " ,
    phone: [],tempPhone: " " ,
  }}
  onPressRegisterButton(){
    Actions.accepted()
  }
  render() {
    let H=Dimensions.get('window').height
    let w=Dimensions.get('window').width
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView
      horizontal={true}
      pagingEnabled={true}
      >
        <View style={{width: w}} >    
        <Text style={styles.fonts}> Give your informations here</Text>
        <TextInput
        style= {styles.input}
        placeholder=' Full name'
        placeholderTextColor='#27ae60'
        returnKeyType='next'
        ref= {(input)=> this.fullNameInput=input }
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempFullName: text
            }
          }
        )}
        value={this.state.fullNameInput}
        autoFocus={true}
        onSubmitEditing={()=> this.userNameInput.focus()}
        />

        <TextInput
        placeholder=" User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        returnKeyType='next'
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempUserName: text
            }
          }
        )}
        ref= {(input)=> this.userNameInput=input }
        onSubmitEditing={()=> this.passwordInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder=' password'
        placeholderTextColor='#27ae60'
        secureTextEntry
        returnKeyType='next'
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempPassword: text
            }
          }
        )}
        ref= {(input)=> this.passwordInput=input }
        />
        <Text style={styles.fonts2}> Scroll right >>> </Text>
        
        </View>



        <View style={{width: w, justifyContent: 'center' , }} >
        <TextInput
        style= {styles.input}
        placeholder=' address'
        placeholderTextColor='#27ae60'
        returnKeyType='next'
        ref= {(input)=> this.addressInput=input }
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempAddress: text
            }
          }
        )}
        onSubmitEditing={()=> this.eMailInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder=' email'
        placeholderTextColor='#27ae60'
        returnKeyType='go'
        ref= {(input)=> this.eMailInput=input }
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempEmail: text
            }
          }
        )}
        onSubmitEditing={()=> this.phoneInput.focus()}
        />

        <TextInput
        style= {styles.input}
        placeholder=' Phone'
        placeholderTextColor='#27ae60'
        returnKeyType='go'
        onChangeText={(text) => this.setState(
          (previousState) => {
            return {
              tempPhone: text
            }
          }
        )}
        ref= {(input)=> this.phoneInput=input }
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressRegisterButton}>
        <Text style={styles.buttonFonts}>
          Register
        </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2461',
    alignItems: 'center',
  },
  input: {
      width: 250, 
      backgroundColor: '#1e3799', 
      alignItems: 'center', 
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#192a56',
      margin: 10,
      paddingLeft: 10
    },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center',
      padding: 20,
      marginTop : 20 ,
      marginBottom : 20 ,
    },
    fonts2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center',
      padding: 20,
      marginTop : 20 ,
      marginBottom : 20 ,
    },
    buttonStyle: {
      margin: 10,
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
      paddingLeft: 10,
    }
});
