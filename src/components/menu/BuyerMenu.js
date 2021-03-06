import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const list = [
{
  name: 'AllProducts',
  avatar_url: ' ',
  subtitle: ' '
},
{
  name: 'Logout',
  avatar_url: ' ',
  subtitle: ' '
},
];

class BuyerMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l, i) => (
              <ListItem
                onPress={() => this.props.onItemSelected(l.name)}
                key={i}
                title={l.name}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

ListItem.defaultProps = {
  underlayColor: '#1abc9c',
  chevronColor: 'gray',
  rightIcon: { name: 'chevron-right' }
};

export default BuyerMenu;
