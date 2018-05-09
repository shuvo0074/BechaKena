import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router,Scene,Actions} from 'react-native-router-flux'
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'
import Accepted from './src/components/Accepted'
import Failed from './src/components/Failed'
import basicFlatList from './src/components/basicFlatList'

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key="root" hideNavBar={true} >
      
      <Scene
      key="login"
      component={Login}
      title="logiN"
      
      />
      
      <Scene
      key="signup"
      component={SignUp}
      title="signuP"
      />
      
      <Scene
      key="accepted"
      component={Accepted}
      title="accepteD"
      />
      
      <Scene
      key="failed"
      component={Failed}
      title="faileD"
      />
      
      <Scene
      key="BasicFlatList"
      component={basicFlatList}
      title="flatlist"
      initial
      />

      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
});
