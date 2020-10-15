import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

const Dashboard = () => {
  return (
    <View>
      <Image 
        source={require('../assets/images/logo_transparente.png')}
        style={styles.logo}/>
      <Text> Dashboard </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  }
});

export default Dashboard;
