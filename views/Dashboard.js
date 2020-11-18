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
      primaryText:      '',
      secondaryText:    '',

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
    const url = 'https://carisk-backend.herokuapp.com/predict/'
    fetch(url, {
      method: 'POST',
      headers: {
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
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        this.setState({
          backgroundColor:  json.backgroundColor,
          showSign:         json.showSign,
          showSpinner:      json.showSpinner,
          signUrl:          json.signUrl,
          primaryText:      json.primaryText,
          secondaryText:    json.secondaryText,
        })
      })
      .catch((error) => console.error(error))
  }

//   this.setState({
//       "backgroundColor": "#451111",
//       "showSign": true,
//       "showSpinner": true,
//       "signUrl": "https://img2.gratispng.com/20180414/kpe/kisspng-maggy-monica-s-gang-smudge-jimmy-five-watermelon-5ad23263150f44.0907236115237248990863.jpg",
//       "primaryText": "magali",
//       "secondaryText": "MaGaLi"
//   })
// }

  render () {
    return (
      <View style={{...styles.maincontainer, backgroundColor: this.state.backgroundColor}}>
        <View style={styles.centralview}>
          <Text style={styles.maintext}> { this.state.primaryText } </Text>
          <Text style={styles.sectext}> { this.state.secondaryText } </Text>
          {
            this.state.showSign ?
              (
                <View style={styles.imagecontainer}>
                  <Image 
                    source={{
                      uri: this.state.signUrl,
                    }}
                    style={styles.signimage}/>
                </View>
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
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  signimage: {
    height: 150,
    minWidth: 150
  },
  maintext: {
    fontSize: 28,
    textAlign: 'center'
    ,marginBottom: 10,
    fontWeight: '700'
  },
  sectext: {
    fontSize: 26,
    textAlign: 'center'
    ,marginBottom: 10,
    fontWeight: '400'
  }
});

export default Dashboard;
