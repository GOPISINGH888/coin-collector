import * as React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';


function Buttn(props)  {
  return (
  <View>
      <TouchableOpacity style={{
          backgroundColor:'#D3AE36',borderRadius:10,width:'80%',alignSelf:'center',height:'27%'}}>
          <Text style={{textAlign:'center',fontSize:20,fontFamily:'BerlinSansFB-Reg',fontWeight:"bold",padding:12}}>{props.Buttntxt}</Text>
      </TouchableOpacity>
  </View>
  );
}

export default Buttn 

//#D3AE36