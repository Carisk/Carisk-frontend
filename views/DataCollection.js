import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import LogoWithText from '../components/LogoWithText'
import CustomButton from '../components/CustomButton'

const DataCollection = () => {
  return (
    <>
      <View style={styles.container}>
            <LogoWithText/>
            <View style={styles.textbox}>
                <Text style={styles.text}> Fill some data about yourself so we can better predict your risks. </Text>
                <Text style={styles.text}> It's optional and annonymous! </Text>
            </View>
            <View style={styles.form}>
              <View style={styles.formdata}>
              <TextInput style={styles.formtextinput} placeholder="Age"></TextInput>
              </View>
              <View style={styles.formdata}>
                <Text style={styles.formtext}>Sex</Text>
                <Text style={styles.formdropdown}>batata</Text>
              </View>
              <View style={styles.formdata}>
                <TextInput style={styles.formtextinput} placeholder="Vehicle Age"></TextInput>
              </View>
              <View style={styles.formdata}>
                <Text style={styles.formtext}>Vehicle Type</Text>
                <Text style={styles.formdropdown}>batata</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <CustomButton style={styles.button} title="Send Data"></CustomButton>
              <View style={styles.button}></View>
              <CustomButton style={styles.button} title="Skip"></CustomButton>
            </View>
      </View>
    </>
  );
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
      marginBottom: 10
    },
    formtext: {
      flex: 1,
      fontFamily: 'Raleway-Light',
    },
    formdropdown: {
      flex: 1,
      textAlign: 'right',
    },
    formtextinput: {
      flex: 1,
      height: 35,
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

export default DataCollection;
