import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const CustomTextInput = ({label, type}) => {
  const defineKeyboard = typeOfKeys => {
    switch (typeOfKeys) {
      case 'password':
        return 'default';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={type === 'password'}
        keyboardType={defineKeyboard(type)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    paddingHorizontal: 60,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  label: {
    paddingLeft: 20,
  },
});

export default CustomTextInput;
