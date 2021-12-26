import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import ContactContainer from '../container/ContactContainer';
import {connect} from 'react-redux';

import {getContactList} from '../action';

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false};
  }

  componentDidMount() {
    this.props.getContactList();
  }

  _goToDetails = item => {
    this.props.navigation.navigate('Details', {details: item});
  };

  _onRefresh = () => {
    this.setState({refreshing: true}, () => {
      this.props.getContactList();
      this.setState({refreshing: false});
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ContactContainer
          contactList={this.props.contactList}
          goToDetails={this._goToDetails}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {contactList} = state.contact;

  return {
    contactList,
  };
};

export default connect(mapStateToProps, {getContactList})(ContactScreen);
