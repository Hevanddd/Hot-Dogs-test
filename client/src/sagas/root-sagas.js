import { all, fork } from 'redux-saga/effects';
import * as getAllHotDogsSagas from './get-all-hot-dogs.sagas';
import * as addHotDogSagas from './add-hot-dog-sagas';
import * as deleteHotDogSagas from './delete-hot-dog-sagas';
import * as updateHotDogSagas from './update-hot-dog-sagas';

export function* rootSagas() {
  yield all(
    [
      ...Object.values(getAllHotDogsSagas),
      ...Object.values(addHotDogSagas),
      ...Object.values(deleteHotDogSagas),
      ...Object.values(deleteHotDogSagas),
      ...Object.values(updateHotDogSagas),
    ].map(fork)
  );
}
