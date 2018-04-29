import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions} from 'react-native-router-flux'

export default class Failed extends React.Component {
  onPressSignUpButton(){
    Actions.signup()
  }
  onPressLoginButton(){
    Actions.login()
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text>Login failed</Text>
        
        <View style={{flexDirection: 'row',justifyContent: 'space-evenly',}}>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressSignUpButton} >
        <Text style={styles.buttonFonts}>
          Sign up
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLoginButton} >
        <Text style={styles.buttonFonts}>
          Try again
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
    backgroundColor: '#0984e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#192a56',
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
    }
});
