import { Icon, Text} from 'native-base';
import React from 'react';
import {View,Image} from 'react-native';
import CustomAbsolute from '../Components/CustomAbsolute';
import Buttn from '../Components/Buttn';
import CustomInput from '../Components/CustomInput';
function ForgotPassword({navigation})
{
    return(
        <View style={{backgroundColor:'white',flex:1}}>
          
        <Image source={require('../Assests/colony.jpg')} style={{alignSelf:'center',height:130,width:120,marginTop:50}}/>
        <Text style={{textAlign:'center',fontFamily:'Berlin Sans FB',fontSize:23,marginTop:20}}>Forgot Password</Text>
        <View style={{marginTop:28}}>
        <CustomInput placeholder={'Enter your email id'} 
        keyboardType="email-address"   />
         <CustomAbsolute title={'Email'}  marginTop={'80'}/>
        </View>
        <View style={{marginTop:25}}>
        <Buttn onPress={()=>navigation.navigate('VerificationCode')} text={'Done'}/></View>
        </View>
       
    )
}
export default ForgotPassword