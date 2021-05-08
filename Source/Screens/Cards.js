import { Container,Card } from 'native-base';
import React ,{useState} from 'react';
import { View, Text,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttn from '../Components/Buttn'
import TextInput from '../Components/CustomTextInput';
function Cards({navigation}) {
    return (
<Container>
<View elevation={20} style={{backgroundColor:'#fff',padding:20,position:'relative',flexDirection:'row'}}>
        
        <FontAwesome onPress={()=>navigation.navigate('Payment')} name={'chevron-left'} size={20} />
            <Text style={{textAlign:'center',paddingHorizontal:'40%',fontSize:16,fontFamily:'Berlin Sans FB',fontWeight:"bold"}}>Cards</Text>
      </View>
 <View style={{flexDirection:'row',justifyContent:'center',marginTop:25}}>
       <Image source={require('../Assests/Visa.png')}  />
       <Image source={require('../Assests/Discover.png')}  />
       <Image source={require('../Assests/Mastercard.png')}  />
       <Image source={require('../Assests/Amazon.png')}  />
      </View>
      <View style={{marginTop:-30,marginBottom:-25}}>
       <Card  style={{ borderRadius:15,flexDirection:'row',justifyContent:'space-between',width:'83%',alignSelf:'center',paddingHorizontal:15,paddingVertical:12,elevation:10,marginTop:'11%',marginBottom:'11%'}}>
     <View style={{flexDirection:'column'}}>
       <Text style={{fontWeight:'900',fontSize:19,fontFamily:'Berlin Sans FB',paddingTop:4,color:'#515C6F'}}>Payment Amount</Text>
       <Text style={{fontWeight:'bold',fontSize:25,fontFamily:'Berlin Sans FB'}}>$100.00</Text>
       </View>
       <Image source={require('../Assests/iconedit.png')} style={{marginTop:7}} />
          </Card>
          </View>
<TextInput label="Card Number" />
<TextInput label="CardholderName" />
<View style={{flexDirection:'row'}}>

</View>
<TextInput label="Zip/Postal Code" />



</Container>
    )}
    export default Cards