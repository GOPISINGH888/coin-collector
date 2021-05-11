import React ,{useEffect}from 'react';
import {View,Text,Image} from 'react-native';
function FrontPage(props)
{
  useEffect(()=>{
    setTimeout(() => {
        props.navigation.navigate('Login')
      }, 3000);
},[])
    return(
        <View style={{flex:1}}>
      <Image source={require('../Assests/colony.jpg')}
      style={{justifyContent:'center',alignSelf:'center',position:'absolute',marginTop:210}}/>
    </View>
    )
}
export default FrontPage
