import { combineReducers } from 'redux';

import merchData from './data';

function merchants(state = [...merchData], action) {
  switch(action.type) {
    case 'ADD_MERCHANT':
      return [...state, {...action.data}]
    case 'EDIT_MERCHANT':
      return state.map(merchant => {
        if(merchant.id === action.id) {
          return {...merchant, ...action.data}
        }

        return {...merchant};
      });
    case 'REMOVE_MERCHANT':
      // database operations
      return state.filter(merchant => merchant.id !== action.id);
    default:
      return state;
  }
}

const merchantApp = combineReducers({
  merchants
});

export default merchantApp;