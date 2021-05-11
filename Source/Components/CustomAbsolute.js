import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
function CustomAbsolute({title}) {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          top: -63,
          left: 66,
          borderColor: 'white',
          padding: 5,
          position: 'absolute',
        }}>
        <Text style={{fontSize: 13}}>{title}</Text>
      </View>
    </View>
  );
}
export default CustomAbsolute;
