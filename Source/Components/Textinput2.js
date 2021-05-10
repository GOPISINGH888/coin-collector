import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 63,
    position: 'relative',
    elevation: 10,
    marginVertical: 10,
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -8,
    left: 17,
    padding: 5,
    zIndex: 20,
  },
});

const CustomTextInput = ({label, style, ...props}) => {
  const [isActive, setActive] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={{color: isActive ? '#000' : '#959593', fontSize: 13}}>
              {label}
            </Text>
          </View>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: isActive ? '#000' : '#959593',
              height: 35,
              paddingHorizontal: 25,
              marginVertical: 5,
              borderRadius: 8,

              width: 160,
            }}
            placeholderTextColor="#00000029"
            {...props}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default CustomTextInput;
