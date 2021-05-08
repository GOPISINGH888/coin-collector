import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: 63, 
      position: 'relative',
      elevation:10,
      marginVertical:10
      
    },
    labelContainer: {
      position: 'absolute',
      backgroundColor: '#FFF',
      top: -8,
      left: 55,
      padding: 5,
      zIndex: 50,
    
     
      
    },
    textInput: {
      flex: 1, 
      borderWidth: 1, 
      borderColor: "#707070",
      justifyContent: 'flex-end',
      height: 35,
      paddingHorizontal: 25,
      marginHorizontal:30,
      marginVertical:5,
      borderRadius:10,
      
    }
  })
  
  const CustomTextInput = ({ label, style, ...props}) => (
    <View style={styles.container} >
      <View style={styles.labelContainer}>
        <Text style={{color:'#707070'}}>{label}</Text>
      </View>
      <TextInput style={styles.textInput}/>
    </View>
  );
  
  export default CustomTextInput;