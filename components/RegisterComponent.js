import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import CustomButton from './CustomButton.js';
import CustomTextInput from './CustomTextInput.js';

const RegisterComponent = ({onPressBack}) => {
  return (
    <ScrollView style={styles.registerContainer}>
      <Button title="Atrás" onPress={onPressBack} />
      <Text>Registro</Text>

      <CustomTextInput label={'Nombre'} />
      <CustomTextInput label={'Apellido'} />
      <CustomTextInput label={'E-mail'} type={'email'} />
      <CustomTextInput label={'password'} type={'password'} />
      <CustomButton label={'Crear cuenta'} />
    </ScrollView>
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

export default RegisterComponent;
