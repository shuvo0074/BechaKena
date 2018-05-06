import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Router,Stack,Scene,Actions} from 'react-native-router-flux'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {txt: [],pass: []};
  }
  onPressRegisterButton(){
    var a=this.refs.uName.value
    var arr = this.state.txt
    arr.push(a)
    this.setState({txt: arr})
    arr = this.state.pass
    a=this.refs.pas.value
    arr.push(a)
    this.setState({pass: arr})
    Actions.accepted()
  }
  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.fonts}> Give your Username and password here</Text>
        
        <TextInput
        placeholder="   User name"
        placeholderTextColor="#27ae60"
        style= {styles.input}
        returnKeyType='next'
        ref = "uName"
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={()=> this.passwordInput.focus()}
        />
        
        <TextInput
        style= {styles.input}
        placeholder='   password'
        placeholderTextColor='#27ae60'
        secureTextEntry
        ref = "pas"
        returnKeyType='go'
        ref= {(input)=> this.passwordInput=input }
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressRegisterButton} >
        <Text style={styles.buttonFonts}>
          Register
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0984e3',
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
      fontSize: 22,
      fontWeight: 'bold',
      color: '#192a56',
      alignItems: 'center',
      padding: 20
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
      paddingLeft: 10,
    }
});
