import {GET_CONTACT_LIST, UPDATE_CONTACT} from './ActionType';
import data from '../assets/data.json';
import {Alert} from 'react-native';

export const getContactList = () => {
  return (dispatch, getState) => {
    dispatch({type: GET_CONTACT_LIST, payload: data});
  };
};

export const updateContact = value => {
  return (dispatch, getState) => {
    dispatch({type: UPDATE_CONTACT, payload: value});

    Alert.alert('Successfully saved.');
  };
};
