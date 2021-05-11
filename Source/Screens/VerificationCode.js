import { Icon, Text ,Card} from 'native-base';
import React from 'react';
import {Image, View} from 'react-native';
import Buttn from '../Components/Buttn';
import CustomVerifyInput from '../Components/CustomVerifyInput';
function VerificationCode({navigation})
{
    return(
        <View style={{backgroundColor:'white',flex:1}}>
            {/* <FontAwesome  name={'chevron-left'} size={20} /> */}
             <Icon  name='arrow-back'/> 
         <Image source={require('../Assests/colony.jpg')} style={{alignSelf:'center',height:120,width:110,marginTop:45}}/>
         <Text style={{textAlign:'center',fontFamily:'Berlin Sans FB',fontSize:23,marginTop:20}}>Verification Code</Text>
         <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:45,marginHorizontal:50,marginVertical:10}}>
         <CustomVerifyInput  keyboardType="numeric" />
         <CustomVerifyInput keyboardType="numeric" />
         <CustomVerifyInput keyboardType="numeric"  />
         <CustomVerifyInput  keyboardType="numeric" />
         <CustomVerifyInput  keyboardType="numeric" />
         
         </View>
         <View style={{marginTop:30}}>
         <Buttn onPress={()=>navigation.navigate('NewPassword')} text={'Submit'} />
         </View>
        </View>
    )
}
export default VerificationCode