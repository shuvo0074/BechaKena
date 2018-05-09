import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import flatListData from './fListData'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'


export default class addModal extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      deletedRowKey: null,
    }
  }
  showAddModal = ()=> {
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
        alert ("Modal closed")
      }}
      >
       <Text>New item information
        </Text>
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
    width: 250,
    borderRadius: 15,
  },
  list: {
    width: W
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
