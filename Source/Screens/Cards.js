import {Card} from 'native-base';
import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {Container,CheckBox} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttn from '../Components/Buttn';
import TextInput from '../Components/CustomTextInput';
import Textinput2 from '../Components/Textinput2';

function Cards({navigation}) {
  
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)
  

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
          onPress={() => navigation.navigate('Payment')}
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
          Cards
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Image source={require('../Assests/Visa.png')} />
        <Image source={require('../Assests/Discover.png')} />
        <Image source={require('../Assests/Mastercard.png')} />
        <Image source={require('../Assests/Amazon.png')} />
      </View>

      <View style={{marginTop: -30, marginBottom: -25}}>
        <Card
          style={{
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '86%',
            alignSelf: 'center',
            paddingHorizontal: 15,
            paddingVertical: 12,
            elevation: 10,
            marginTop: '11%',
            marginBottom: '11%',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 19,
                fontFamily: 'Berlin Sans FB',
                paddingTop: 4,
                color: '#515C6F',
              }}>
              Payment Amount
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                fontFamily: 'Berlin Sans FB',
              }}>
              $100.00
            </Text>
          </View>
          <Image
            source={require('../Assests/iconedit.png')}
            style={{marginTop: 7}}
          />
        </Card>
      </View>

      <TextInput label="Card Number" placeholder="Enter your number" />
      <TextInput label="Cardholder Name" placeholder="Enter your name" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 27,
        }}>
        <Textinput2 label="Expiry Data" placeholder="MM/YY" />
        <Textinput2 label="Security Number" placeholder="8181" />
      </View>
      <TextInput label="Zip/Postal Code" placeholder="8888888" />
      <View style={{flexDirection:'row',alignSelf:'flex-start',left:20}}>
      <CheckBox onPress={handleClick} checked={checked} color='#707070' style={{borderWidth:0.5,borderRadius:4,borderWidth:1,margin:10}}/>
      
        <Text style={{ marginTop: 9,left:5}}>
          Remember this card details
        </Text>
      </View>
      <View style={{marginTop: 40}}>
        <Buttn
          text={'Pay $150.00'}
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </Container>
  );
}

export default Cards;
