import { combineReducers } from 'redux';

function merchants(state = [], action) {
  switch(action.type) {
    case 'SET_INIT':
      return [...state, ...action.data];
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