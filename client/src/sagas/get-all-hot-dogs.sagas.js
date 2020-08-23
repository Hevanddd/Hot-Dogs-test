import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../services';
import {
  getAllHotDogsStart,
  getAllHotDogsFail,
  getAllHotDogsSuccess,
} from '../redux/actions';

function* callgetAllHotDogs() {
  try {
    const data = yield call(httpRequest, `/api`, 'GET');
    yield put(getAllHotDogsSuccess(data));
  } catch (e) {
    console.log('Something is going wrong!')
    yield call(getAllHotDogsFail);
  }
}

export function* getAllHotDogsSagas() {
  yield takeEvery(getAllHotDogsStart, callgetAllHotDogs);
}