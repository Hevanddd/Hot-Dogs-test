import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../services';
import {
  addHotDogStart,
  addHotDogFail,
  addHotDogSuccess,
  loadingStart,
  loadingStop
} from '../redux/actions';

function* callAddHotDog({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/create`, 'POST', payload);
    yield put(addHotDogSuccess(data));
  } catch (e) {
    console.log('Something is going wrong!')
    yield call(addHotDogFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* addHotDogSagas() {
  yield takeEvery(addHotDogStart, callAddHotDog);
}