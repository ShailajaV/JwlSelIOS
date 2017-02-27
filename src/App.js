/* Welcome file which starts rendering the app */
import React, { Component } from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './Router';
import configureStore from './ConfigureStore';
=======
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';
import { BackgroundImage } from './components/common';
import { Menu } from './components/common/Menu';
>>>>>>> 0f7a9a53e1c87a439bf522d664a1533dc3748daf

class App extends Component {

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

  render() {
    const store = configureStore();
    return (
      <BackgroundImage>
		<View>
          <Text onPress={() => this.toggle()}> = </Text>
        </View>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}
        >
			<Provider store={store}>
				<Router />
			</Provider>
        </SideMenu>
      </BackgroundImage>
    );
  }
}

export default App;
