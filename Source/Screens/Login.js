import { CheckBox ,Text} from 'native-base';
import React,{useState} from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import CustomAbsolute from '../Components/CustomAbsolute';

import Buttn from '../Components/Buttn';
import CustomInput from '../Components/CustomInput';

function Login(props)
{
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <Image source={require('../Assests/colony.jpg')} style={{alignSelf:'center',height:130,width:120,marginTop:40}}/>
            
           <CustomInput placeholder={'Enter your email id'} 
           keyboardType="email-address" />
           <CustomAbsolute title={'Email'}  />
          
           <CustomInput placeholder={'     Enter your password'}
           keyboardType="password" 
           secureTextEntry={true}/>
           <CustomAbsolute title={'Password'}  />

           <View style={{flexDirection:'row',marginLeft:30,marginTop:20,color:'#707070'}} >
           <CheckBox onPress={handleClick} checked={checked} color='#707070' style={{borderWidth:0.5,borderRadius:4,borderWidth:1}}/>
           <Text style={{marginLeft:20,color:'#707070',fontSize:15}}>Remember</Text>
           <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                <Text style={{color:'#707070',fontSize:15,marginLeft:80}}>Forgot Password?</Text>
          </TouchableOpacity>
           </View>
           <View style={{marginTop:30}}>
           <Buttn onPress={()=>props.navigation.navigate('DrawerNavigation')} text={'Login'} />
           </View>
           <View  style={{flexDirection:'row',marginLeft:70}}>
           <Text style={{marginTop:20,textAlign:'center',color:'#00000061'}}>Don't have an account?</Text>
           <TouchableOpacity 
           onPress={()=>props.navigation.navigate('SignUp')}><Text  style={{marginTop:20,textAlign:'center',color:'#707070'}}>Sign Up</Text></TouchableOpacity>
           </View>
        </View>
    )
}
export default Login