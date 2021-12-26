import {GET_CONTACT_LIST, UPDATE_CONTACT} from '../action/ActionType';

const INITIAL_STATE = {
  contactList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT_LIST:
      return {
        ...state,
        contactList: action.payload,
      };
    case UPDATE_CONTACT:
      let tempArr = JSON.parse(JSON.stringify(state.contactList));

      for (var i = 0; i < tempArr.length; i++) {
        var data = tempArr[i];
        if (data.id == action.payload.id) {
          data.firstName = action.payload.firstName;
          data.lastName = action.payload.lastName;
          data.email = action.payload.email;
          data.phone = action.payload.phone;
          break;
        }
      }
      return {
        ...state,
        contactList: tempArr,
      };
    default:
      return state;
  }
};
