import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RegisterComponent from './components/RegisterComponent.js';
import StartComponent from './components/StartComponent.js';

const VIEWS = {
  START: 'start',
  REGISTER: 'register',
  LOGIN: 'login',
};

const App = () => {
  const [displayView, setDisplayView] = useState(VIEWS.START);

  const goToRegister = () => {
    setDisplayView(VIEWS.REGISTER);
  };

  const goToStart = () => {
    setDisplayView(VIEWS.START);
  };

  const renderView = view => {
    switch (view) {
      case VIEWS.START:
        return <StartComponent onPressRegister={goToRegister} />;
      case VIEWS.REGISTER:
        return <RegisterComponent onPressBack={goToStart} />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderView(displayView)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#C4ECFC',
    height: '100%',
  },
});

export default App;
