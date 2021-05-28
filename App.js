import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Mainactivity from './components/main';
import Mybills from './components/mybills';
import Welcome from './components/welcome';

class App extends Component{
render(){
  return(
    <View style={styles.component}>
      
      <Mainactivity />
    </View>
  );
}
}
const styles = StyleSheet.create({
component:{
  flex:1
 
}

});

export default App;