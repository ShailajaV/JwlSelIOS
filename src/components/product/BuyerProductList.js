/* This file fetches products list */
import _ from 'lodash';
import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import GridView from 'react-native-gridview';
import { connect } from 'react-redux';
import { getAllProductDetails, productDetailsChanged } from '../../actions';
import { CardSection } from '../common';
import BuyerProductListItem from './BuyerProductListItem';
import styles from '../common/CommonCSS';
import { PLACEHOLDER_SEARCH } from '../../actions/constants';

class BuyerProductsList extends Component {

  constructor(props) {
    super(props);
    const data = null;

    this.state = {
      data,
      itemsPerRow: 3,
      variableContent: false,
      useRandomCounts: false,
    };
  }

  componentWillMount() {
    this.props.getAllProductDetails();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const rowData = this.createRandomData(products);
    this.setState({ data: products });
    return new GridView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    }).cloneWithRowsAndSections(rowData);
  }

  createRandomData(data) {
    return {
      'Section 1': this.createRandomRows(data)
    };
  }

  createRandomRows(data) {
    const { itemsPerRow } = this.state;
    const rowData = [];
    for (let i = 0; i < data.length; i) {
      const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
      rowData.push(data.slice(i, endIndex));
      i = endIndex;
    }
    return rowData;
  }

  renderItem(product) {
    return <BuyerProductListItem product={product} />;
  }

  renderGridView() {
    return (
      <GridView
        data={this.state.data}
        dataSource={this.dataSource}
        padding={4}
        itemsPerRow={this.state.itemsPerRow}
        renderItem={this.renderItem}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CardSection
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            margin: 4,
            alignSelf: 'stretch',
            height: 40 }}
        >
          <Image
            source={require('../common/images/search.png')}
            style={styles.searchImg}
            resizeMode={Image.resizeMode.sretch}
          />
          <TextInput
            placeholder={PLACEHOLDER_SEARCH}
            autoCorrect={false}
            style={[styles.inputStyle, { alignSelf: 'stretch',
            borderRadius: 5,
            borderWidth: 0,
            borderColor: '#ddd',
            marginLeft: 5,
            marginRight: 5 }]}
            value={this.props.search}
            placeholderTextColor='#fff'
            underlineColorAndroid='transparent'
            onChangeText={value =>
              this.props.productDetailsChanged({ prop: 'search', value })}
          />
        </CardSection>
        {this.renderGridView()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { search } = state.productForm;
  const productsList = [];
  _.map(state.products, (val) => {
    _.map(val, (value, uid) => {
      productsList.push({ ...value, uid });
      return { ...value, uid };
    });
  });
  const products = productsList.filter(
    (product) => {
      return product.productName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }
  );
  return { products, search };
};

export default connect(mapStateToProps,
  { getAllProductDetails, productDetailsChanged })(BuyerProductsList);
