import React, {Component} from 'react';
import {View, Text, SectionList, TextInput} from 'react-native';

import style from './style';

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Main Information',
          data: [
            {name: 'First Name', key: 'firstName'},
            {name: 'Last Name', key: 'lastName'},
          ],
        },
        {
          title: 'Sub Information',
          data: [
            {name: 'Email', key: 'email'},
            {name: 'Phone', key: 'phone'},
          ],
        },
      ],
      inputRef: ['firstName', 'lastName', 'email', 'phone'],
      focusIndex: 0,
    };
  }

  _renderItem = ({item, index, section}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Text style={{width: '25%', fontSize: 16, padding: 5}}>
          {item.name}
        </Text>
        <TextInput
          ref={input => {
            this['input_' + item.key] = input;
          }}
          onSubmitEditing={() => {
            var id;

            if (this.state.focusIndex == this.state.inputRef.length - 1) {
              this.setState({
                focusIndex: 0,
              });
              id = 'input_' + this.state.inputRef[0];
            } else {
              id = 'input_' + this.state.inputRef[this.state.focusIndex + 1];
            }

            this[id].focus();
          }}
          onFocus={() => {
            this.setState({
              focusIndex: this.state.inputRef.indexOf(item.key),
            });
          }}
          blurOnSubmit={false}
          selectTextOnFocus
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderWidth: 0.5,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 5,
            fontSize: 16,
          }}
          returnKeyType="next"
          value={this.props.details[item.key]}
          onChangeText={value => {
            this.props.onChangeText(value, item.key);
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SectionList
          sections={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                fontWeight: 'bold',
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: '#f3f3f3',
                fontSize: 18,
              }}>
              {title}
            </Text>
          )}
          ListHeaderComponent={() => (
            <View style={{flex: 1, alignItems: 'center', marginVertical: 20}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: '#ff8c00',
                  borderRadius: 50,
                }}></View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default DetailsContainer;
