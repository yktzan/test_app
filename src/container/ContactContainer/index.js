import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import style from './style';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}
      onPress={() => {
        this.props.goToDetails(item);
      }}>
      <View
        style={{
          backgroundColor: '#ff8c00',
          height: 50,
          width: 50,
          marginRight: 10,
          borderRadius: 25,
        }}></View>
      <Text style={{fontSize: 18}}>
        {item.firstName} {item.lastName}
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.contactList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View style={{height: 2}} />}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.props.onRefresh}
            />
          }
        />
      </View>
    );
  }
}

export default ContactContainer;
