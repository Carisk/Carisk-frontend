import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Text
} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/images/logo_transparente.png')}
            style={styles.logo}/>
        <Text style={styles.text}> Carisk </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#E3EFF5'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 30,
        fontFamily: 'Raleway-Bold'
    }
});

export default Loading;
