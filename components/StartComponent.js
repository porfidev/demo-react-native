import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import logoImage from '../assets/logo.png';
import CustomButton from './CustomButton.js';

const StartComponent = ({onPressRegister}) => {
  return (
    <ScrollView style={styles.startContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>

      <View style={styles.mgTop20}>
        <CustomButton label={'iniciar sesión'} />
      </View>
      <View style={styles.mgTop20}>
        <CustomButton
          label={'registrarse'}
          type={'register'}
          onPress={onPressRegister}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#C4ECFC',
    height: '100%',
  },
  startContainer: {
    paddingHorizontal: 60,
  },
  logoContainer: {
    alignItems: 'center',
    height: 300,
    paddingTop: 60,
  },
  logo: {
    width: 101,
    height: 135,
  },
  mgTop20: {
    marginTop: 20,
  },
});

export default StartComponent;
