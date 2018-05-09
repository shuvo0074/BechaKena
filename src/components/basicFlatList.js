import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import fListData from '../contents/fListData'
import AddModal from '../contents/addModal'

class FlatListItems extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      activeRowKey: null,
    }
  }
    render() {

      const swipeSettings= {
        autoClose : true,
        onClose: (secID, rowId, direction) => {
          if (this.state.activeRowKey != null){
            this.setState ({activeRowKey: null})
          }
        },
        onOpen: (secID, rowId, direction) => {
          this.setState ({activeRowKey: this.props.item.key})
        },
        right: [
          {
            onPress: ()=> {
              const deletingRow = this.state.activeRowKey
              Alert.alert(
                '',
                'Are you sure to delete this item?',[
                  {text: 'No' , onPress: ()=> console.log("cancelled"),style: 'cancel'},
                  {text: 'Yes', onPress: ()=> {
                    fListData.splice(this.props.index,1)
                    this.props.parentFlatList.refreshFlatList()                  
                  }}
                ],
                {cancelable: true}
              )
            },
            text: 'delete', type: 'delete'
          }
        ],
        rowId: this.props.index,
        sectionId: 1 
      }
      
      return (
        <Swipeout {...swipeSettings} >
          <View style={{
          backgroundColor : this.props.index %2 == 0 ? '#55E6C1' : '#58B19F',
          flexDirection: 'row',width: Dimensions.get('window').width,
        }}>
        <Image 
        source={this.props.item.imageS} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View >
        <Text style={styles.listItemFonts}>{this.props.item.name}</Text>
        <Text>{this.props.item.desc}</Text>
        </View>
        </View>
        </Swipeout>
      );
    }
  }

export default class basicFlatList extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      deletedRowKey: null,
    })
    this._onPressAdd = this._onPressAdd.bind (this)
  }

  refreshFlatList = (deletedKey) => {
    this.setState ((prevState) => {
      return{
        deletedRowKey: deletedKey
      }
    })
  }

  onPressLogOutButton(){
    Actions.login()
  }
  _onPressAdd() {
    //alert ("You added an item. ")
    this.refs.addModal.showAddModal()
  }
  render() {
    return (

      <View style={styles.container}>
        
        <TouchableHighlight style={{ margin : 30,alignItems: 'flex-end', height: 60,borderRadius: 15, width: Dimensions.get('window').width - 60 , backgroundColor: '#0984e3'}}
        onPress={this._onPressAdd}
        >
          <Image source={require('../contents/add_item.png')}
          style={{height: 50,width: 50,marginRight: 20,padding:10}} />
        </TouchableHighlight>
        <FlatList style={styles.list}
        data={fListData}
        renderItem={({item,index})=>
        {
            return (
                <FlatListItems item={item} index={index} parentFlatList = {this} ></FlatListItems>
            )
        }}
        >
        </FlatList>
        <AddModal
        ref={'addModal'} 
        parentFlatList={this}
        >
        </AddModal>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPressLogOutButton} >
        <Text style={styles.buttonFonts}>
          Log out
        </Text>
        </TouchableOpacity>
        
      </View>
    );
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
