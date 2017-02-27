/* Welcome file which starts rendering the app */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';
import { BackgroundImage, Header } from './components/common';
import { Menu } from './components/common/Menu';

class App extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDFmxMQ6Fp55hh6RQiaUuIHsUYDlTKySZc',
    authDomain: 'jewellery-ece6f.firebaseapp.com',
    databaseURL: 'https://jewellery-ece6f.firebaseio.com',
    storageBucket: 'jewellery-ece6f.appspot.com',
    messagingSenderId: '601320078334'
    };
  firebase.initializeApp(config);
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.goToScreen(item);
  }

  goToScreen(route) {
    switch (route) {
      case 'LoginForm':
        return Actions.logIn();
      case 'AccountSettings':
        return Actions.sellerProfile();
      case 'ProductCreate':
        return Actions.productDetails();
      case 'ProductDetails':
        return Actions.productsList();
      case 'ForgotPassword':
        return Actions.forgotPassword();
      default:
        return Actions.logIn();
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;


  return (
      <BackgroundImage>

        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}
        >
        <View>
        <Header headerText='Toggle' onPress={() => this.toggle()} />
        </View>
      <Provider store={store}>
            <Router />
          </Provider>

        </SideMenu>
      </BackgroundImage>
    );
  }
}
export default App;
