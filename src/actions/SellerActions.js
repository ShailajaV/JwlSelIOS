/* This file includes all seller profile action creators */
import { Actions } from 'react-native-router-flux';
import { firebaseDatabase, firebaseAuth, firebaseStorage } from '../FirebaseConfig';
import { saveProfileImage, deleteProfileImage } from './common/ImgOperations.js';
import { SELLER_PROFILE_CHANGED, SELLER_FETCH_SUCCESS,
  SELLER_SAVE_SUCCESS, SELLER_SAVE_FAIL, GETPROFILE_IMAGE_SUCCESS,
  GETPROFILE_IMAGE_FAIL } from './types';
import { ERRMSG_SELLER_PROFILE_FAILED, ERRMSG_STRG_IMG_FAILED,
  ERR_STRG_OBJ_NOTFOUND } from './errorMsgConstants';
import { SELLER_ACCOUNT_SETTINGS } from './constants';

/* Assign all seller values to corresponding keys
* @parameter: prop, value
* @return : prop, value
*/
export const sellerProfileChanged = ({ prop, value }) => {
  return {
    type: SELLER_PROFILE_CHANGED,
    payload: { prop, value }
  };
};

/* Fetch seller profile info
* @return : SellerProfileForm
*/
export const sellerProfileInfo = () => {
  const { currentUser } = firebaseAuth;
  return (dispatch) => {
    firebaseDatabase.ref(`/sellers/${currentUser.uid}/`)
    .on('value', snapshot => {
      dispatch({ type: SELLER_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

/* save seller profile form
* @parameter: image, fullName, companyName and address
* @return : ProductForm
*/
export const saveSellerProfile = ({
  imageURL, deleteFlag, fullName, companyName, address, uid }) => {
  const { currentUser } = firebaseAuth;
  return (dispatch) => {
    firebaseDatabase.ref(`/sellers/${currentUser.uid}/${uid}`)
    .set({ fullName, companyName, address })
    .then(() => {
      const imageRef = `/images/${currentUser.uid}/profilepicture`;
      if (deleteFlag === 1) {
        dispatch(deleteProfileImage(imageRef, SELLER_ACCOUNT_SETTINGS));
      } else if (imageURL !== null && imageURL !== '') {
          const { uri } = imageURL;
          dispatch(saveProfileImage(uri, imageRef, SELLER_ACCOUNT_SETTINGS));
      } else {
        dispatch({ type: SELLER_SAVE_SUCCESS });
        Actions.productDetails();
      }
    })
    .catch(() => {
      dispatch({
        type: SELLER_SAVE_FAIL,
        payload: ERRMSG_SELLER_PROFILE_FAILED
      });
    });
  };
};

/* Fetch seller profile pic
  @parameter: uid
* @return : imageURL
*/
export const getSellerProfileImage = () => {
  return (dispatch) => {
    const { currentUser } = firebaseAuth;
    const imageRef = firebaseStorage.ref().child(`/images/${currentUser.uid}/profilepicture`);
    imageRef.getDownloadURL()
    .then((url) => {
      getProfileImgSuccess(dispatch, url);
    })
    .catch((error) => {
      if (error.code !== ERR_STRG_OBJ_NOTFOUND) {
        getProfileImgFail(dispatch, ERRMSG_STRG_IMG_FAILED);
      }
    });
  };
};

//seller fetch profile pic success
const getProfileImgSuccess = (dispatch, text) => {
  dispatch({
    type: GETPROFILE_IMAGE_SUCCESS,
    payload: text
  });
};

//seller fetch profile pic fail
const getProfileImgFail = (dispatch, text) => {
  dispatch({
    type: GETPROFILE_IMAGE_FAIL,
    payload: text
  });
};
