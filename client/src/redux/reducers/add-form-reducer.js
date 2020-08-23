import { handleActions } from 'redux-actions';
import { showAddForm, hideAddForm } from '../actions';

const initialState = {
    isVisibleAddForm: false,
};

const reducerMap = {
  [showAddForm]: (state) => {
    return {
      ...state,
      isVisibleAddForm: true,
    };
  },
  [hideAddForm]: (state) => {
    return {
      ...state,
      isVisibleAddForm: false,
    };
  },
};

export const addFormReducer = handleActions(reducerMap, initialState);
