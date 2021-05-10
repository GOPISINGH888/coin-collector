import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Buttn = ({onPress, text, ...props}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#D3AE36',
      borderRadius: 10,
      width: '80%',
      alignSelf: 'center',
    }}>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'BerlinSansFB-Reg',
        fontWeight: 'bold',
        paddingVertical: 12,
      }}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Buttn;


