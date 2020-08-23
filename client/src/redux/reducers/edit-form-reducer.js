import { handleActions } from 'redux-actions';
import { showEditForm, hideEditForm } from '../actions';

const initialState = {
    isVisibleEditForm: false,
};

const reducerMap = {
  [showEditForm]: (state, { payload }) => {
    return {
      ...state,
      isVisibleEditForm: payload,
    };
  },
  [hideEditForm]: (state) => {
    return {
      ...state,
      isVisibleEditForm: false,
    };
  },
};

export const editFormReducer = handleActions(reducerMap, initialState);
