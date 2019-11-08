import { combineReducers } from 'redux';

export default combineReducers({
  default: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
});
