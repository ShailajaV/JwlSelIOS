/* Registration form */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import {
  userDetailsChanged,
  createUserAccount } from '../../actions';
import { SPINNER_SIZE, LABEL_FULLNAME, PLACEHOLDER_FULLNAME, LABEL_EMAIL, PLACEHOLDER_EMAIL,
  LABEL_PASSWORD, PLACEHOLDER_PASSWORD, LABEL_COMPANY_NAME, PLACEHOLDER_COMPANY_NAME,
  LABEL_ADDRESS_LINE1, PLACEHOLDER_STREET, LABEL_ADDRESS_LINE2, PLACEHOLDER_APT, LABEL_STATE,
  PLACEHOLDER_STATE, LABEL_CITY, PLACEHOLDER_CITY, LABEL_ZIP, PLACEHOLDER_ZIP, LABEL_PHONENUMBER,
  PLACEHOLDER_PHONENUMBER, SIGN_UP, EMAIL, PASSWORD, UNDEFINED, FULLNAME, COMPANYNAME,
  ADDRESS_STREET, ADDRESS_APT, STATE, CITY, ZIP, PHONE_NUMBER
} from '../../actions/constants';
import { validateEmail, validatePassword, validateEmptyFields, validateZip,
  validatePhoneNumber } from '../common/Utils';
import styles from '../common/CommonCSS';

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.validations = this.validations.bind(this);
  }

  state = {
    errors: {}
  }

  onSignUpButton() {
    if (this.props.loading) {
      return <Spinner size={SPINNER_SIZE} />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        {SIGN_UP}
      </Button>
    );
  }

  onButtonPress() {
    const errors = this.validations(this.props);
    if (Object.keys(errors).length === 0) {
      const { fullName, email, password, companyName, addrStreet,
         addrApt, state, city, zip, phoneNum } = this.props;
      this.props.createUserAccount({ fullName,
        email,
        password,
        companyName,
        addrStreet,
        addrApt,
        state,
        city,
        zip,
        phoneNum });
    }
  }

  handleChange(fieldName, fieldValue) {
    if (typeof this.state.errors[fieldName] !== UNDEFINED) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[fieldName];
      this.setState({
        [fieldName]: fieldValue,
        errors });
    } else {
      this.setState({ [fieldName]: fieldValue });
    }
  }

  validations(values) {
    const { fullName, email, password, companyName, addrStreet, addrApt,
      state, city, zip, phoneNum } = values;
    let errors = {};
    if (typeof fullName !== UNDEFINED) {
      errors = validateEmptyFields(FULLNAME, fullName, this.state.errors);
    } else if (values.uniqueName === FULLNAME) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof email !== UNDEFINED) errors = validateEmail(email, this.state.errors);
    else if (values.uniqueName === EMAIL) {
      errors = validateEmail(values.value, this.state.errors);
    }

    if (typeof password !== UNDEFINED) {
      errors = validatePassword(password, this.state.errors);
    } else if (values.uniqueName === PASSWORD) {
      errors = validatePassword(values.value, this.state.errors);
    }

    if (typeof companyName !== UNDEFINED) {
      errors = validateEmptyFields(COMPANYNAME, companyName, this.state.errors);
    } else if (values.uniqueName === COMPANYNAME) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof addrStreet !== UNDEFINED) {
      errors = validateEmptyFields(ADDRESS_STREET, addrStreet, this.state.errors);
    } else if (values.uniqueName === ADDRESS_STREET) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof addrApt !== UNDEFINED) {
      errors = validateEmptyFields(ADDRESS_APT, addrApt, this.state.errors);
    } else if (values.uniqueName === ADDRESS_APT) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof state !== UNDEFINED) {
      errors = validateEmptyFields(STATE, state, this.state.errors);
    } else if (values.uniqueName === STATE) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof city !== UNDEFINED) {
      errors = validateEmptyFields(CITY, city, this.state.errors);
    } else if (values.uniqueName === CITY) {
      errors = validateEmptyFields(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof zip !== UNDEFINED) {
      errors = validateZip(ZIP, zip, this.state.errors);
    } else if (values.uniqueName === ZIP) {
      errors = validateZip(values.uniqueName, values.value, this.state.errors);
    }

    if (typeof phoneNum !== UNDEFINED) {
      errors = validatePhoneNumber(phoneNum, this.state.errors);
    } else if (values.uniqueName === PHONE_NUMBER) {
      errors = validatePhoneNumber(values.value, this.state.errors);
    }
    this.setState({ errors });
    return errors;
  }

  render() {
    return (

        <ScrollView>
          <Card style={{ backgroundColor: '#1abc9c' }}>
            <CardSection>
              <Input
                label={LABEL_FULLNAME}
                placeholder={PLACEHOLDER_FULLNAME}
                value={this.props.fullName}
                uniqueName={FULLNAME}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'fullName', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.fullName}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_EMAIL}
                placeholder={PLACEHOLDER_EMAIL}
                value={this.props.email}
                uniqueName={EMAIL}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'email', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.email}
              </Text>
            </View>

            <CardSection>
              <Input
                secureTextEntry
                label={LABEL_PASSWORD}
                placeholder={PLACEHOLDER_PASSWORD}
                value={this.props.password}
                uniqueName={PASSWORD}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'password', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.password}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_COMPANY_NAME}
                placeholder={PLACEHOLDER_COMPANY_NAME}
                value={this.props.companyName}
                uniqueName={COMPANYNAME}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'companyName', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.companyName}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_ADDRESS_LINE1}
                placeholder={PLACEHOLDER_STREET}
                value={this.props.addrStreet}
                uniqueName={ADDRESS_STREET}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'addrStreet', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.addrStreet}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_ADDRESS_LINE2}
                placeholder={PLACEHOLDER_APT}
                value={this.props.addrApt}
                uniqueName={ADDRESS_APT}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'addrApt', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.addrApt}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_STATE}
                placeholder={PLACEHOLDER_STATE}
                value={this.props.state}
                uniqueName={STATE}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'state', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.state}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_CITY}
                placeholder={PLACEHOLDER_CITY}
                value={this.props.city}
                uniqueName={CITY}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'city', value })}
              />
              <Input
                label={LABEL_ZIP}
                placeholder={PLACEHOLDER_ZIP}
                value={this.props.zip}
                uniqueName={ZIP}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'zip', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.city}
              </Text>
              <Text style={styles.errorTextStyle}>
                {this.state.errors.zip}
              </Text>
            </View>

            <CardSection>
              <Input
                label={LABEL_PHONENUMBER}
                placeholder={PLACEHOLDER_PHONENUMBER}
                value={this.props.phoneNum}
                uniqueName={PHONE_NUMBER}
                validate={this.validations}
                onChange={this.handleChange.bind(this)}
                onChangeText={value =>
                  this.props.userDetailsChanged({ prop: 'phoneNum', value })}
              />
            </CardSection>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Text style={styles.errorTextStyle}>
                {this.state.errors.phoneNumber}
              </Text>
            </View>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.onSignUpButton()}
            </CardSection>
          </Card>
        </ScrollView>

    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { fullName, email, password, companyName, error, loading, addrStreet, addrApt, state, city,
    zip, phoneNum } = auth;
  return { fullName,
    email,
    password,
    companyName,
    error,
    loading,
    addrStreet,
    addrApt,
    state,
    city,
    zip,
    phoneNum
  };
};

export default connect(mapStateToProps, { userDetailsChanged, createUserAccount })(RegisterForm);
