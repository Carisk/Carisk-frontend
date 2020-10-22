import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';

import DataCollection from './views/DataCollection'
import Dashboard from './views/Dashboard'
import Loading from './views/Loading'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      page: null
    }
    this.findLoadedUser()
  }

  async findLoadedUser () {
    try {
      const loadedUser = await AsyncStorage.getItem('loadedUser')
      if (loadedUser == 'true') {
        this.setState({page: 'Dashboard'})
      } else {
        this.setState({page: 'DataCollection'})
      }
    } catch (error) {
      this.setState({page: 'DataCollection'})
    }
  }

  changePage (page) {
    this.setState({page: page})
  }

  render () {
    if (this.state.page === 'DataCollection') {
      return (<DataCollection changePage={(e) => this.changePage(e)}/>)
    } else if (this.state.page === 'Dashboard') {
      return (<Dashboard/>)
    } else {
      return (<Loading/>)
    }
  }
};

const styles = StyleSheet.create({

});

export default App;

