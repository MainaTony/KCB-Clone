import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Touchable} from 'react-native';


class Mainactivity extends Component{
  ButtonClicked(){
    alert('Button Clicked')
  }
 
render(){
  
  return(
    <View style={styles.component}>
      <View style={styles.profileview}>
      <Text style={styles.morningtext}>Good Afternoon {'\n'} Charles </Text>
      
      <View style={styles.profilepic}></View>
      </View>

      <View style={styles.mainpaymentsection}>
        
      <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/BuyAirtime.png')} style={styles.img}/>
        <Text style={styles.text}>Buy Airtime</Text>
        
        </View>
        </TouchableOpacity>
        

        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/cashtransfer.png')} style={styles.img}/>
        <Text style={styles.text}>Cash Transfers</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/cardservices.png')} style={styles.img}/>
        <Text style={styles.text}>Card Services</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/sendmoney.png')} style={styles.img}/>
        <Text style={styles.text}>Send To M-pesa</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/withdrawcash.png')} style={styles.img}/>
        <Text style={styles.text}>Withdraw</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.paymenticonandtext}>
        <Image source={require('../assets/schoolfees.png')} style={styles.img}/>
        <Text style={styles.text}>School Fees</Text>
        </View> 
        </TouchableOpacity>
      </View>


     
      <Text style={styles.voomatext}>VOOMA SERVICES:</Text>
      

      <View style={styles.voomacomponent}>
      
      <TouchableOpacity onPress={this.ButtonClicked}>
      <View style={styles.sendcomponent}>
      <Image source={require('../assets/voomaboth.png')} style={styles.img}/>
        <Text style={styles.text}>SEND TO{'\n'} VOOMA</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.ButtonClicked}>
      <View style={styles.paycomponent}>
      <Image source={require('../assets/voomaboth.png')} style={styles.img}/>
        <Text style={styles.text}>PAY TO{'\n'} VOOMA</Text>
      </View>
      </TouchableOpacity>

      </View>
      <Text style={styles.paybill}>PAYBILL:</Text>
      
      <View style={styles.paybillsection}> 
      <Image source={require('../assets/utilitypaymentbest.png')} style={styles.img}/>
      <TouchableOpacity onPress={this.ButtonClicked}>
        <Text style={styles.utilitystyle}>Make Utility Payments</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.bottomtab}>

      <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.home}>
        <Image source={require('../assets/home.png')} style={styles.img}/>
        <Text style={styles.text}>HOME</Text>
        </View>
        </TouchableOpacity>

        
        
        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.home}>
        <Image source={require('../assets/scanQRcode.png')} style={styles.img}/>
        <Text style={styles.text}>SCAN QR</Text>
        </View>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.home}>
        <Image source={require('../assets/loans.png')} style={styles.img}/>
        <Text style={styles.text}>LOANS</Text>     
        </View>
        </TouchableOpacity>

        
        
        <TouchableOpacity onPress={this.ButtonClicked}>
        <View style={styles.home}>
        <Image source={require('../assets/accounttab.png')} style={styles.img}/>
        <Text style={styles.text}>ACCOUNT</Text>
        </View>
        </TouchableOpacity>

      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
component:{
  flex:1,
  padding:10,
  alignItems:'center',
  justifyContent:'space-around',
  backgroundColor:'#f5f2f2'
},
morningtext:{
  padding:5
},
profileview:{
 height:'10%',
 width:'90%',
 borderRadius:5,
 backgroundColor:'#fff',
 borderWidth:4,
 borderColor:'#ebe8e8'


},
profilepic:{
  
  
  
},
mainpaymentsection:{
  padding:5,
  alignItems:'center',
  flexDirection:'row',
  flexWrap:'wrap',
  height:'30%',
  width:'90%',
  justifyContent:'space-around',
  borderRadius:10,
  backgroundColor:'#fff',
  borderColor:'#ebe8e8',
  borderWidth:4
},
img:{
  height:40,
  width:40
},
paymenticonandtext:{
  padding:6,
alignItems:'center',
justifyContent:'space-around'

},
voomatext:{
    fontWeight:'bold',
    alignSelf:'flex-start',
    marginLeft:20
   
},
voomacomponent:{
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-around',
 height:'15%',
 width:'90%',
 borderRadius:10,
 backgroundColor:'#fff',
 borderColor:'#ebe8e8',
 borderWidth:4
  
},
sendcomponent:{
  flexDirection:'row'
  
},
paycomponent:{
  flexDirection:'row'
},
paybill:{
  fontWeight:'bold',
    alignSelf:'flex-start',
    marginLeft:20
},

paybillsection:{
  alignItems:'flex-start',
  flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-around',
 height:'15%',
 width:'90%',
 borderRadius:10,
 backgroundColor:'#fff',
 borderColor:'#ebe8e8',
 borderWidth:4
},
bottomtab:{
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-around',
  
 height:'15%',
 width:'90%',
 borderRadius:10,
 backgroundColor:'#fff',
 borderColor:'#ebe8e8',
 borderWidth:4
},
text:{
  fontSize:11
},
home:{
  alignItems:'center'
},
utilitystyle:{
  
}

});

export default Mainactivity;
