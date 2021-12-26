import React, {Component} from 'react';
import {SafeAreaView, Button, Alert} from 'react-native';
import DetailsContainer from '../container/DetailsContainer';
import {connect} from 'react-redux';

import {updateContact} from '../action';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: JSON.parse(JSON.stringify(this.props.route.params.details)),
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={this._updateItem} title="Save" color="#ff8c00" />
      ),
    });
  }

  _updateItem = () => {
    if (
      this.state.details.firstName == '' ||
      this.state.details.lastName == ''
    ) {
      Alert.alert('Error', 'First Name and Last name cannot be empty.');
    } else {
      this.props.updateContact(this.state.details);
    }
  };

  _onChangeText = (value, key) => {
    let obj = this.state.details;
    obj[key] = value;
    this.setState({
      details: obj,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <DetailsContainer
          details={this.state.details}
          onChangeText={this._onChangeText}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {} = state.contact;

  return {};
};

export default connect(mapStateToProps, {updateContact})(DetailsScreen);
