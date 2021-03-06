/* All the different routes/scenes the user can navigate */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import Register from './components/auth/Register';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import SellerMenuProfile from './SellerMenuProfile';
import BuyerMenuProfile from './BuyerMenuProfile';
import BuyerProductList from './components/product/BuyerProductList';
import {
  KEY_AUTH, KEY_SIGN_UP, KEY_LOGIN, KEY_FORGOT_PASSWORD,
  KEY_PRODUCT_DETAILS, KEY_PRODUCT_LIST,
  KEY_PRODUCT_EDIT, KEY_SELLER_MENU, KEY_SELLER_MENU_PROFILE,
  KEY_BUYER_MENU, KEY_BUYER_MENU_PROFILE, KEY_PRODUCTS_BY_SELLER
} from './actions/constants';

const RouterComponent = () => {
  return (
    <Router showNavigationBar={false} >
      <Scene key={KEY_AUTH} initial>
        <Scene
          key={KEY_LOGIN}
          sceneStyle={{ backgroundColor: '#1abc9c' }}
          component={LoginForm} hideNavBar initial
        />
        <Scene
          key={KEY_SIGN_UP}
          sceneStyle={{ backgroundColor: '#1abc9c' }}
          component={Register} hideNavBar
        />
        <Scene
          key={KEY_FORGOT_PASSWORD}
          sceneStyle={{ backgroundColor: '#1abc9c' }}
          component={ForgotPasswordForm}
        />
      </Scene>
      <Scene key={KEY_SELLER_MENU}>
        <Scene
          key={KEY_SELLER_MENU_PROFILE}
          item='sellerProfile'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_DETAILS}
          item='productCreate'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_LIST}
          item='productList'
          component={SellerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCT_EDIT}
          item='productEdit'
          component={SellerMenuProfile} hideNavBar
        />
      </Scene>
      <Scene key={KEY_BUYER_MENU}>
        <Scene
          key={KEY_BUYER_MENU_PROFILE}
          item='buyerProducts'
          component={BuyerMenuProfile} hideNavBar
        />
        <Scene
          key={KEY_PRODUCTS_BY_SELLER}
          sceneStyle={{ backgroundColor: '#1abc9c' }}
          component={BuyerProductList} hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
