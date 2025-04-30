import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import Login from './login';
import ChooseOrderType from './chooseOrderType'; 

export default function SplashScreen() {
  const [showLogin, setShowLogin] = useState(false);
  const [showChooseOrderType, setShowChooseOrderType] = useState(false); 
  const loginOpacity = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef(null);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      lottieRef.current?.pause();
      setShowLogin(true);
      Animated.timing(loginOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 4000); // 4 seconds for splash animation

    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = () => {
    setShowLogin(false); // Hide the Login component
    setShowChooseOrderType(true); // Show the ChooseOrderType overlay
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={lottieRef}
        source={require('../assets/animations/SPLASHSCREEN.json')}
        autoPlay
        loop={false}
        style={styles.lottie}
      />

      {showLogin && (
        <Animated.View style={[styles.loginOverlay, { opacity: loginOpacity }]}>
          <Login onLogin={handleLogin} /> {/* Pass the handleLogin function */}
        </Animated.View>
      )}

      {showChooseOrderType && (
        <View style={styles.chooseOrderTypeOverlay}>
          <ChooseOrderType />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  lottie: {
    alignSelf: 'center',
    position: 'absolute',
    width: 700,
    height: 800,
    
    
  },
  loginOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  chooseOrderTypeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});