import * as React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Button, Container, Header, Left, Card, CardItem,CheckBox} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttn from '../Components/Buttn';

function Payment({navigation}) {
  return (
    <Container>
      <View
        elevation={20}
        style={{
          backgroundColor: '#fff',
          padding: 20,
          position: 'relative',
          flexDirection: 'row',
        }}>
        <FontAwesome
          onPress={() => navigation.navigate('Buy')}
          name={'chevron-left'}
          size={20}
        />
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: '40%',
            fontSize: 16,
            fontFamily: 'Berlin Sans FB',
            fontWeight: 'bold',
          }}>
          Payment
        </Text>
      </View>
      <Image
        source={require('../Assests/Payment.png')}
        style={{
          alignSelf: 'center',
          marginTop: '18%',
          shadowColor: 'grey',
          marginBottom: '26%',
        }}
      />

      <Buttn text={'Purchase'} onPress={() => navigation.navigate('Cards')} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Paypal')}
        style={{
          borderRadius: 10,
          width: '80%',
          alignSelf: 'center',
          height: '7%',
          borderWidth: 1.5,
          borderColor: '#0090DF',
          marginTop: '-30%',
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
          }}>
          Pay with
        </Text>
        <Image source={require('../Assests/paypallogo.png')} />
      </TouchableOpacity>
    </Container>
  );
}

export default Payment;
