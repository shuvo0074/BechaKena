import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions} from 'react-native-router-flux'

export default class Accepted extends React.Component {
  onPressLogOutButton(){
    Actions.login()
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.fonts} >Successful !</Text>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLogOutButton} >
        <Text style={styles.buttonFonts}>
          Log out
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
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#192a56',
      alignItems: 'center', 
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
