import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


class Welcome extends Component{
render(){
  return(
    <View style={styles.component}>
        <Image source={require('../assets/kcblogo.png')}
        />
        <Image style={styles.logo2image} source={require('../assets/kcblogo2.png')}
        />
      <Text style={styles.maintext}>Welcome</Text>
      <Text style={styles.bottomtext}> Welcome to the new {'\n'} and revamped KCB {'\n'} app</Text>
      <View style={styles.learnview}>
          <Text style={styles.learntext}>LEARN MORE</Text>
      </View>

      <View style={styles.learnview}>
          <Text style={styles.learntext}>GET STARTED</Text>
      </View>

    </View>
  );
}
}
const styles = StyleSheet.create({
component:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
},
logo2image:{
 height:100,
 width:100
},
maintext:{
    fontSize:40,
    marginTop:20,
    color:'#67ff38'
},
bottomtext:{
    fontSize:15,
    marginBottom:30
},
learnview:{

    marginTop:10,
    borderColor: '#fff000',
    color:'#fff'
},
learntext:{
    padding:10,
    fontWeight:'bold',
    backgroundColor:'#67ff38',
    paddingHorizontal:100,
    borderRadius:25,
    color:'#fff',
    fontSize:15

}

});

export default Welcome;