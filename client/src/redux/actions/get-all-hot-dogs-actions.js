import { createAction } from 'redux-actions';

export const getAllHotDogsStart = createAction('GET_ALL_HOT_DOGS_START');
export const getAllHotDogsSuccess = createAction('GET_ALL_HOT_DOGS_SUCCESS');
export const getAllHotDogsFail = createAction('GET_ALL_HOT_DOGS_FAIL');
