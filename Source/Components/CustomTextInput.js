import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  keyboardVerticalOffset,
} from 'react-native';

const CustomTextInput = ({label, style, ...props}) => {
  const [isActive, setActive] = useState(false);
  return (
    <View
      style={{
        height: 63,
        position: 'relative',
        elevation: 10,
        marginVertical: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#FFF',
          top: -8,
          left: 60,
          padding: 5,
          zIndex: 50,
        }}>
        <Text style={{color: isActive ? '#000' : '#959593', fontSize: 13}}>
          {label}
        </Text>
      </View>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: isActive ? '#000' : '#959593',
          justifyContent: 'flex-end',
          height: 35,
          paddingHorizontal: 25,
          marginHorizontal: 40,
          marginVertical: 5,
          borderRadius: 8,
        }}
        placeholderTextColor="#00000029"
        {...props}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </View>
  );
};
export default CustomTextInput;
