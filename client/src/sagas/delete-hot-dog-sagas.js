import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../services';
import {
  deleteHotDogStart,
  deleteHotDogFail,
  deleteHotDogSuccess,
  loadingStart,
  loadingStop
} from '../redux/actions';

function* callDeleteHotDog({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/delete/${payload}`, 'DELETE');
    yield put(deleteHotDogSuccess(data));
  } catch (e) {
    console.log('Something is going wrong!')
    yield call(deleteHotDogFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* deleteHotDogSagas() {
  yield takeEvery(deleteHotDogStart, callDeleteHotDog);
}