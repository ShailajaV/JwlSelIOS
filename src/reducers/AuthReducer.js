/* This file contains authentication related reducers */
import {
  USER_DETAILS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
  companyName: '',
  user: null,
  error: '',
  loading: false,
  addrStreet: '',
  addrApt: '',
  state: '',
  city: '',
  zip: '',
  phoneNum: '',
  drLicense: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DETAILS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.paylod };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    /*case FULLNAME_CHANGED:
      return { ...state, fullName: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case COMPANYNAME_CHANGED:
      return { ...state, companyName: action.payload };
    case ADDRSTREET_CHANGED:
      return { ...state, addrStreet: action.payload };
    case ADDRAPT_CHANGED:
      return { ...state, addrApt: action.payload };
    case STATE_CHANGED:
      return { ...state, state: action.payload };
    case CITY_CHANGED:
      return { ...state, city: action.payload };
    case ZIP_CHANGED:
      return { ...state, zip: action.payload };
    case PHONENUM_CHANGED:
      return { ...state, phoneNum: action.payload };*/
    case LOGOUT_USER:
      return { ...state, ...INITIAL_STATE };
    case PASSWORD_RESET_SUCCESS:
      return { INITIAL_STATE };
    case PASSWORD_RESET_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
