import * as React from 'react';
import { View, Text,Image } from 'react-native';
import {Button,Container,Header,Left,Card,CardItem} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttn from '../Components/Buttn'
import Payment from './Payment';

function Buy({ navigation}) {
  return (
    <Container>
       <View elevation={20} style={{backgroundColor:'#fff',padding:20,position:'relative',flexDirection:'row'}}>
        
        <FontAwesome onPress={()=>navigation.navigate('Home')} name={'chevron-left'} size={20} />
            <Text style={{textAlign:'center',paddingHorizontal:'40%',fontSize:16,fontFamily:'Berlin Sans FB',fontWeight:"bold"}}>BUY</Text>
      </View>
       <Image source={require('../Assests/shadowcoin.png')} style={{alignSelf:'center',marginTop:'18%',shadowColor:'grey'}} />

       <View >
       <Card  style={{ borderRadius:15,flexDirection:'row',justifyContent:'space-between',width:'83%',alignSelf:'center',paddingHorizontal:15,paddingVertical:12,elevation:10,marginTop:'11%',marginBottom:'11%'}}>
       <Text style={{fontWeight:'900',fontSize:19,fontFamily:'Berlin Sans FB',paddingTop:4}}>Silver Coin</Text>
       <Text style={{fontWeight:'bold',fontSize:25,fontFamily:'Berlin Sans FB'}}>$100.00</Text>
          </Card>
          </View>
       <Buttn  Buttntxt ={'Purchase'}   />
    </Container>
  );
}

export default Buy