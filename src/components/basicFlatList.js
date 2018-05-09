import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions } from 'react-native';
import { Actions} from 'react-native-router-flux'
import flatListData from '../contents/fListData'

class FlatListItems extends React.Component {
    
    render() {
      return (
        <View style={{
          padding: 10,
          backgroundColor : this.props.index %2 == 0 ? '#55E6C1' : '#58B19F',
        }}>
        <Text style={styles.listItemFonts}>{this.props.item.name}</Text>
        <Text>{this.props.item.desc}</Text>
        </View>
      );
    }
  }

export default class basicFlatList extends React.Component {
  constructor (props){
    super(props)
    this.state = {
    }
  }

  onPressLogOutButton(){
    Actions.login()
  }
  
  render() {
    return (

      <View style={styles.container}>
        
        <View style={{padding: 5, margin : 30, backgroundColor: '#58B19F'}}>
          <Text style= {styles.listItemFonts}>Items list</Text>
        </View>
        <FlatList style={styles.list}
        data={flatListData}
        renderItem={({item,index})=>
        {
            return (
                <FlatListItems item={item} index={index} ></FlatListItems>
            )
        }}
        >
        </FlatList>

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
    marginHorizontal : 25,

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
