import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { AsyncStorage } from 'react-native';

class Dashboard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      backgroundColor:  '#E3EFF5',
      showSign:         false,
      showSpinner:      true,
      signUrl:          null,

      latitude:     null,
      longitude:    null,
      sex:          null,
      vehicle_type: null,
      vehicle_age:  null,
      age:          null,
    }
  }

  componentDidMount() {
    setInterval(
      () => this.fetcher(this.state, this.setState), 1000)
    AsyncStorage.getItem('sex')
      .then((res) => this.setState({ sex: res}))
    AsyncStorage.getItem('vehicle_type')
      .then((res) => this.setState({ vehicle_type: res}))
    AsyncStorage.getItem('vehicle_age')
      .then((res) => this.setState({ vehicle_age: res}))
    AsyncStorage.getItem('age')
      .then((res) => this.setState({ age: res}))
  }
  
  fetcher () {
    // collect data
    Geolocation.getCurrentPosition(
      geodata => {
        this.state.latitude  =  geodata.coords.latitude
        this.state.longitude =  geodata.coords.longitude
      }
    )

    console.log('sending:', 
      {
        latitude:     this.state.latitude,
        longitude:    this.state.longitude,
        sex:          this.state.sex,
        vehicle_type: this.state.vehicle_type,
        vehicle_age:  this.state.vehicle_age,
        age:          this.state.age,
      }
    )

    // send to api
    const url = 'https://mywebsite.com/'
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude:     this.state.latitude,
        longitude:    this.state.longitude,
        sex:          this.state.sex,
        vehicle_type: this.state.vehicle_type,
        vehicle_age:  this.state.vehicle_age,
        age:          this.state.age,
      })
    })

    // get response
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          backgroundColor:  json.backgroundColor,
          showSign:         json.showSign,
          showSpinner:      json.showSpinner,
          signUrl:          json.signUrl
        })
      })
      .catch((error) => console.error(error))
  }

  render () {
    return (
      <View style={{...styles.maincontainer, backgroundColor: this.state.backgroundColor}}>
        <View style={styles.centralview}>
          <Text style={styles.maintext}> Main text </Text>
          <Text style={styles.maintext}> Subtitle text </Text>
          {
            this.state.showSign ?
              (
                <Image 
                  source={{
                    uri: this.state.signUrl,
                  }}
                  style={styles.signimage}/>
              ) : null
          }
          {
            this.state.showSpinner ?
              (
                <ActivityIndicator 
                  size="large" 
                  color="#000000"
                  style={styles.spinner}/>
              ) : null
          }
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
  },
  centralview: {

  },
  signimage: {
    height: 100,
    width: 100
  }
});

export default Dashboard;
