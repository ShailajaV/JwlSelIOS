/* Customized text input component */
import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './CommonCSS';

class Input extends Component {
  onChangeValue() {
    this.props.onChange(this.props.uniqueName, this.props.value);
  }

  handleBlur() {
    this.props.validate(this.props);
  }
  render() {
    const { inputStyle, labelStyle, inputContainerStyle } = styles;
    return (
      <View style={inputContainerStyle} >
        <Text style={labelStyle}>{this.props.label}</Text>
        <TextInput
          editable={this.props.editable}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor='#fff'
          underlineColorAndroid='transparent'
          multiline
          numberOfLines={1}
          onBlur={(value) => this.handleBlur(value)}
          onChange={(value) => this.onChangeValue(value)}
        />
      </View>
    );
  }
}
export { Input };
