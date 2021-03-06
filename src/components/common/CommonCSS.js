import { PixelRatio, Platform, StyleSheet } from 'react-native';

export default {
  cardStyle: {
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },

  cardSectionStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    opacity: 0.7
  },

  upload: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },

  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },

  cardSeccontainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Times New Roman'
  },

  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 40,
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#fff',
    fontFamily: 'Times New Roman'
  },

  labelStyle: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    flex: 2,
    fontFamily: 'Times New Roman',
    lineHeight: 30,
    height: 40
  },

  inputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  mulInputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 60,
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },

  mulInpcontainerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    height: 40,
    paddingTop: 8
  },

  imageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },

  hamStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },

  logoStyle: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  emailNpwdStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },

  selContainerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    opacity: 0.7
  },

  uploadContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },

  uploadLabelStyle: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    fontFamily: 'Times New Roman',
    lineHeight: 23,
    height: 30
  },

  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  prdContainerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative'
  },

  prdLabelStyle: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    fontFamily: 'Times New Roman',
    lineHeight: 23,
    height: 30
  },

  container: {
   flex: 1,
   paddingTop: Platform.OS === 'ios' ? 20 : 0,
   backgroundColor: '#1abc9c'
 },

 item: {
    flex: 1,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    overflow: 'hidden'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  MenuContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  MenuButton: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },

  searchImg: {
    borderRadius: 50,
    width: 30,
    height: 30,
  },

  spinnerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  spinnerBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
