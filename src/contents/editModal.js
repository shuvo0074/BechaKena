import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,TextInput } from 'react-native';
import { Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import flatListData from './fListData'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'


export default class editModal extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      ItemName:'',
      ItemDescription: '',      
    }
  }
  showEditModal = ()=> {
    this.refs.myModal.open()
  }
  
  render() {
    return(
      <Modal
      style={styles.modalStyle}
      ref={"myModal"}
      position = 'center'
      backdrop= {true}
      onClosed= { ()=>{
        alert ("Item Edited to the bottom")
      }}
      >
      <Text style={styles.modalText} >New item information</Text>
      <TextInput
      style= {styles.input}
      placeholder=' Item name'
      onChangeText= {(text) => {
        this.setState({
          ItemName: text
        })}}
      value={this.state.ItemName}
      />
      <TextInput
      style= {styles.input}
      placeholder=' Description'
      value={this.state.ItemDescription}
      onChangeText= {(text) => {
        this.setState({
          ItemDescription: text
        })}}
      />
      <Button
      style={styles.buttonStyle}
      onPress={ ()=>{ if (this.state.ItemName.length == 0 || this.state.ItemDescription.length ==0){
        alert("Enter Item name and description")
        return
      }
      
      this.refs.myModal.close()
      }}>
        Save
      </Button>
      </Modal>
    )
    
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2461',
    alignItems: 'center',
  },
  modalStyle: {
    shadowRadius: 15,
    alignItems: 'center',
    height: 250,
    width: 350,
    borderRadius: 15,
    backgroundColor: '#0c2461',
  },
  list: {
    width: W
  },
  input: {
    height: 40, 
    width: 300, 
    backgroundColor: '#1e3799', 
    alignItems: 'center', 
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#192a56',
    margin: 10,
    paddingLeft: 10
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6b81',
    padding: 10,
  },
  listItemFonts: {
    fontSize: 12,
    color: '#ff6b81',
    padding: 5,
    alignItems: 'center',
  },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center', 
    },
    buttonStyle: {
      color: 'white',
      margin: 10,
      height: 30,
      width: 80,
      borderWidth: 3,
      borderColor: '#192a56',
      borderRadius: 5,
      backgroundColor: '#1e3799',
      padding: 3,
      },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 10,
    }
});
