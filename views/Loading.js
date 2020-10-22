import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Text
} from 'react-native';

import LogoWithText from '../components/LogoWithText'

const Loading = () => {
  return (
    <View style={styles.container}>
        <LogoWithText/>
        <ActivityIndicator 
            size="large" 
            color="#000000"
            style={styles.spinner}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: '#E3EFF5'
    },
    spinner: {
        marginTop: 10
    }
});

export default Loading;
