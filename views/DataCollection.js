import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'
import { Picker } from '@react-native-community/picker';
import { AsyncStorage } from 'react-native';

import LogoWithText from '../components/LogoWithText'
import CustomButton from '../components/CustomButton'

class DataCollection extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      sex:          null,
      vehicle_type: null,
      vehicle_age:  null,
      age:          null,
    }
  }

  storeData () {
    AsyncStorage.setItem('loadedUser',    String(true))
    AsyncStorage.setItem('sex',           this.state.sex)
    AsyncStorage.setItem('vehicle_type',  this.state.vehicle_type)
    AsyncStorage.setItem('vehicle_age',   this.state.vehicle_age)
    AsyncStorage.setItem('age',           this.state.age)

    this.props.changePage('Dashboard')
  }

  render () {
    return (
      <>
      <View style={styles.container}>
        <LogoWithText/>
        <View style={styles.textbox}>
            <Text style={styles.text}> 
              Fill some data about yourself so we can better predict your risks.
            </Text>
            <Text style={styles.text}> 
              It's optional and annonymous! 
            </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formdata}>
          <TextInput 
            style={styles.formtextinput} 
            keyboardType='phone-pad' 
            onChangeText={text => this.setState({sex: text})} 
            placeholder="Age"/>
          </View>
          <View style={styles.formpickercontainer}>
            <Text style={styles.formpickertext}>Sex</Text>
            <Picker
              selectedValue={this.state.sex}
              style={styles.formpicker}
              itemStyle={styles.formpickeritemstyle}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sex: itemValue})
              }>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value={null} />
            </Picker>
          </View>
          <View style={styles.formdata}>
            <TextInput 
              style={styles.formtextinput} 
              keyboardType='phone-pad' 
              onChangeText={text => this.setState({vehicle_age: text})} 
              placeholder="Vehicle Age"/>
          </View>
          <View style={styles.formpickercontainer}>
            <Text style={styles.formpickertext}>Vehicle type</Text>
            <Picker
              selectedValue={this.state.vehicle_type}
              style={styles.formpicker}
              itemStyle={styles.formpickeritemstyle}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({vehicle_type: itemValue})
              }>
              <Picker.Item label="Car" value="car" />
              <Picker.Item label="Motorcycle" value="motorcycle" />
              <Picker.Item label="Other" value={null} />
            </Picker>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton 
            style={styles.button} 
            title="Send Data" 
            onPress={this.storeData.bind(this)}/>
          <View style={styles.button}></View>
          <CustomButton 
            style={styles.button} 
            title="Skip" 
            onPress={this.storeData.bind(this)}/>
        </View>
      </View>
    </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#E3EFF5',
  },
    textbox: {
      marginTop: 10,
      alignItems: 'center',
      textAlign: 'center',
      marginHorizontal: '10%'

    },
    text: {
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'Raleway-Light',
    },
    form: {
      marginVertical: 10,
      width: '70%',
    },
    formdata: {
      flexDirection: 'row',
      
    },
    formpickertext: {
      fontFamily: 'Raleway-Thin',
      textAlign: 'center',
    },
    formpicker: {
      height: 20,
      marginLeft: 10,
      marginBottom: 5,
      fontFamily: 'Raleway-Thin',
      textAlign: 'center',
    },
    formpickeritemstyle: {
      fontFamily: 'Raleway-Thin',
      textAlign: 'center',
      fontSize: 5
    },
    formpickercontainer: {
      flexDirection: 'column',
      marginBottom: 10,
      textAlign: 'center',
      marginTop: 10,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#f7f7f7'
    },
    formtext: {
      flex: 1,
      fontFamily: 'Raleway-Thin',
    },
    formtextinput: {
      backgroundColor: '#f7f7f7',
      flex: 1,
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#fff',
      padding: 0,
      paddingHorizontal: 7,
      borderRadius: 10,
    },
    buttons: {
      flexDirection: 'row',
      padding: 10,
      marginHorizontal: '20%',
    },
    button: {
      flex: 1,
    }
});

export default DataCollection
