import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../services';
import {
  updateHotDogStart,
  updateHotDogFail,
  updateHotDogSuccess,
  loadingStart,
  loadingStop
} from '../redux/actions';

function* callUpdateHotDog({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/update/${payload.id}`, 'PUT', payload.data);
    yield put(updateHotDogSuccess(data));
  } catch (e) {
    console.log('Something is going wrong!')
    yield call(updateHotDogFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* updateHotDogSagas() {
  yield takeEvery(updateHotDogStart, callUpdateHotDog);
}