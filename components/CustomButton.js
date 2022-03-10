import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const CustomButton = ({label, type, onPress}) => {
  const customType = pressed => {
    if (type === 'register') {
      return pressed ? 'darkgray' : 'black';
    }
    return pressed ? '#68bfdd' : '#00A0D4';
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: customType(pressed),
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});

export default CustomButton;
