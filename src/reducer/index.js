import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import ContactReducer from './ContactReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const contactPersistConfig = {
  key: 'contact',
  storage: AsyncStorage,
  whitelist: [],
};

export default combineReducers({
  contact: persistReducer(contactPersistConfig, ContactReducer),
});
