import React from 'react';
import {View,Image, ScrollView,TouchableOpacity} from 'react-native';
import {Text,Button} from 'native-base';
import CustomInput from '../Components/CustomInput';
import CustomAbsolute from '../Components/CustomAbsolute';
import Buttn from '../Components/Buttn';
function SignUp(props)
{
    return(
        <ScrollView>
        <View style={{backgroundColor:'white'}}>
          <Image source={require('../Assests/colony.jpg')} style={{alignSelf:'center',height:90,width:80}}/>
          <Text style={{textAlign:'center',fontSize:20,marginTop:14,fontFamily:'Berlin Sans FB',marginBottom:20}}>Create Account
          </Text>
          <CustomInput placeholder={'    Enter your name'}/>
          <CustomAbsolute title={'Name'}/>
          <CustomInput placeholder={'    Enter your email id'}
          keyboardType="email-address"/>
          <CustomAbsolute title={'Email'}/>
          <CustomInput placeholder={'   Enter your password'}
          keyboardType="password"/>
          <CustomAbsolute title={'Password'}/>
          <CustomInput placeholder={' Enter your password'}
          keyboardType="password"/>
          <CustomAbsolute title={'Password'}/>
          <CustomInput placeholder={' Enter your phone no.'}
          keyboardType="numeric"/>
          <CustomAbsolute title={'Phone Number'}/>
          <CustomInput placeholder={' Enter your address'}/>
          <CustomAbsolute title={'Address'}/>
          <CustomInput placeholder={' Enter your refer code'}/>
          <CustomAbsolute title={'Refer Code'}/>
          <Buttn text={'Sign Up'} 
          onPress={()=>props.navigation.navigate('Login')} />
           
        
          <View  style={{flexDirection:'row',marginLeft:70}}>
           <Text style={{marginTop:20,textAlign:'center',color:'#00000061'}}>Don't have an account?</Text>
           <TouchableOpacity><Text  style={{marginTop:20,textAlign:'center',color:'#707070'}}>Sign Up</Text></TouchableOpacity>
           </View>
        </View>
        </ScrollView>
    )
}
export default SignUp