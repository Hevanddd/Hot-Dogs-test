import { handleActions } from 'redux-actions';
import { getAllHotDogsSuccess } from '../actions';

const initialState = {
  hotDogs: null,
};

const reducerMap = {
  [getAllHotDogsSuccess]: (state, { payload }) => {
    return {
      ...state,
      hotDogs: [...payload],
    };
  },
};

export const allHotDogsReducer = handleActions(reducerMap, initialState);
