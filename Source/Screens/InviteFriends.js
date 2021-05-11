import React, {useState} from 'react';
import Buttn from '../Components/Buttn';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Clipboard,
  TouchableOpacity,
} from 'react-native';

import {Container, Card, Button} from 'native-base';
import Modal from 'react-native-modal';

function InviteFriends({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Container>
      <View
        elevation={20}
        style={{
          backgroundColor: '#fff',
          padding: 20,
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../Assests/arrow.png')} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Berlin Sans FB',
            fontWeight: 'bold',
          }}>
          InviteFriends
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{marginHorizontal: 10}}
            source={require('../Assests/info.png')}
          />
          <Image source={require('../Assests/bell.png')} />
        </View>
      </View>
      <View style={{alignSelf: 'center', marginVertical: 20}}>
        <Image source={require('../Assests/invite-friend.png')} />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Card
          style={{
            width: 335,
            paddingHorizontal: 10,
            elevation: 10,
            paddingVertical: 30,
            justifyContent: 'space-between',
            marginBottom: 11,
          }}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', color: '#000', fontSize: 15}}>
              Invite your friends to
            </Text>
            <Text style={{fontWeight: 'bold', color: '#D3AE36', marginLeft: 5}}>
              C
            </Text>
            <Text style={{fontWeight: 'bold', color: '#000'}}>olony</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#515C6F', fontSize: 13}}>
            Share the code below or ask them to enter it after they sign up.
            Your coupon will appear after their first ride.
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#515C6F',
              paddingTop: 20,
              fontSize: 13,
            }}>
            For your friend to receive their coupon, ensure that they use your
            referral before their first ride & within 10 days of signup.
          </Text>
        </Card>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          flexDirection: 'row',
          borderColor: '#D3AE36',
          justifyContent: 'space-between',
          padding: 10,
          marginHorizontal: 13,
          marginVertical: 15,
          width: '80%',
          alignSelf: 'center',
        }}>
        <Text> B21TA2U</Text>
        <Text style={{color: '#D3AE36'}}>Copy Code</Text>
      </View>
      <View style={{marginTop: 25}}>
        <Buttn onPress={toggleModal} text={'InviteFriends'} />
      </View>
      <Modal
        isVisible={isModalVisible}
        animationIn='fadeInUp'
        animationOut='fadeOutDownBig'
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="left"
        onSwipeCancel={() => setModalVisible(true)}
        animationInTiming={1000}
        animationOutTiming={1000}
        >
         
        <View style={{flex: 1}}>
          <Card
            style={{
              height: '60%',
              marginTop: '90%',
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
                marginVertical: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  style={{marginTop: 4, backgroundColor: '#D3AE36'}}
                  source={require('../Assests/wifi.png')}
                />
                <Text style={{fontSize: 10}}>
                  Tap here to turn on Wi-Fi and {'\n'} Bluetooth to send via
                  realm...
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#D3AE36',
                  height: 20,
                  borderRadius: 4,
                }}>
                <Text style={{color: '#D3AE36', padding: 3, fontSize: 10}}>
                  Turn On
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 40,
                paddingVertical: 30,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../Assests/Fb.png')} />
                <Text style={{fontSize: 12}}>News Feed</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../Assests/Skype.png')} />
                <Text style={{fontSize: 12}}>Skype</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 40,
                paddingVertical: 30,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../Assests/Whatsapp.png')} />
                <Text style={{fontSize: 12}}>Whatsapp</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{justifyContent: 'center'}}
                  source={require('../Assests/SMS.png')}
                />
                <Text style={{fontSize: 12}}>New Message</Text>
              </View>
            </View>

            <Buttn onPress={toggleModal} text={'cancel'} />
          </Card>
        </View>
      </Modal>
    </Container>
  );
}
export default InviteFriends;