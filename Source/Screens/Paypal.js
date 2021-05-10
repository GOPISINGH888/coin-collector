import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, Container, Header, Left, Card, CardItem} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInput from '../Components/CustomTextInput';

function Paypal({navigation}) {
  return (
    <Container>
      <View
        elevation={20}
        style={{
          backgroundColor: '#fff',
          padding: 20,
          position: 'relative',
          flexDirection: 'row',
          marginBottom: '10%',
        }}>
        <FontAwesome
          onPress={() => navigation.navigate('Payment')}
          name={'chevron-left'}
          size={20}
        />
        <Image
          source={require('../Assests/paypallogo.png')}
          style={{marginHorizontal: '32%'}}
        />
      </View>
      <TextInput label="Emai" placeholder="Enter Your email id" keyboardType={'email-address'}/>
      <TextInput
        label="Password"
        placeholder="Enter Your Password"
        secureTextEntry={true}
        
      />
     <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
        <FontAwesome name={'check-square'} size={20} style={{color:'#000',marginTop:10}}/>
        <Text style={{ marginTop: 9}}>
          Remember 
        </Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          width: '80%',
          alignSelf: 'center',
          height: '7%',
          backgroundColor: '#0090DF',
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 19,
            fontFamily: 'Berlin Sans FB',
            paddingRight: 4,
            color: '#fff',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
        <Text style={{color: '#A3A3A3'}}>Don’t have an account ? </Text>
        <Text style={{color: '#404040', fontWeight: '600'}}>Sign Up</Text>
      </View>
    </Container>
  );
}

export default Paypal;
