import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions} from 'react-native-router-flux'

export default class Accepted extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      showText : true,
    }
    const timeInterval = 1000
  taskToDo = ()=>{
    this.setState ( prevState =>{
      return {
        showText: !prevState.showText
      }
    }

    )
  }
  setInterval(taskToDo,timeInterval)
  }

  onPressLogOutButton(){
    Actions.login()
  }
  onPressItemButton(){
    Actions.BasicFlatList()
  }
  render() {

    let textToDisplay = this.state.showText? " Successful !": ''
    return (

      <View style={styles.container}>

        <Text style={styles.fonts} > {textToDisplay} </Text>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLogOutButton} >
        <Text style={styles.buttonFonts}>
          Log out
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressItemButton} >
        <Text style={styles.buttonFonts}>
          Item list
        </Text>
        </TouchableOpacity>

      </View>
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
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
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
