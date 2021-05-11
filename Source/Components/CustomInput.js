import React,{useState} from 'react';
import {View, TextInput} from 'react-native';

function CustomInput({placeholder}) {
  const [isActive, setActive] = useState(false);
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#00000029"
        
        style={{
          height: 50,
          width: '80%',
          borderRadius: 9,
          borderWidth: 1,
          borderColor: isActive ? '#000' : '#959593',
          marginTop: 28,
          alignSelf: 'center',
          paddingLeft:32
        }}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}></TextInput>
    </View>
  );
}
export default CustomInput;
