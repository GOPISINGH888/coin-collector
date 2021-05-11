import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Buttn from '../Components/Buttn';
import {useState} from 'react';
import {Container, Card} from 'native-base';
import CustomInput from '../Components/CustomInput';
import CustomAbsolute from '../Components/CustomAbsolute';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  imageWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 110,
    height: 110,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

function Profile({navigation}) {
  const [edit, setEdit] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <Container>
        <Card
          elevation={40}
          style={{borderColor: '#fff', paddingVertical: 10, height: 60}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}>
                <Image style={{}} source={require('../Assests/arrow.png')} />
              </TouchableOpacity>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold'}}>Profile</Text>
            <View>
              <TouchableOpacity
                onPress={() => setEdit(!edit)}> 
                <Image
                  style={{marginTop: 10}}
                  source={require('../Assests/iconedit.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        {!edit && (
          <TouchableOpacity onPress={() => setEdit(true)}></TouchableOpacity>
        )}
        <View style={styles.imageWrapper}>
          <Image
            style={styles.profileImage}
            source={require('../Assests/profile.png')}
          />
        </View>
        <CustomInput placeholder="Jack Gray" editable={edit} />
        <CustomAbsolute title={'Name'} />

        <CustomInput placeholder="Email" editable={edit} />
        <CustomAbsolute title={'Email'} />

        <CustomInput
          label="Password"
          placeholder="********"
          secureTextEntry={true}
           editable={edit}
        />
        <CustomAbsolute title={'Password'} />

        <CustomInput
          placeholder="123456789"
           editable={edit}
        />
        <CustomAbsolute title={'Phone no.'} />

        <CustomInput
          placeholder="Enter your number"
          keyboardType="Lorem Ipsum"
           editable={edit}
        />
        <CustomAbsolute title={'Address'} />
       <View style={{marginTop:20}}>
        <Buttn onPress={() => setEdit(!edit)} text={edit ? 'Save' : 'Done'} />
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
}
export default Profile;
