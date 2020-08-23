import { createSelector } from 'reselect';
import { HOT_DOGS_KEY } from '../constants';

const getHotDogs = (state) => state[HOT_DOGS_KEY];

export const allHotDogsSelector = createSelector(getHotDogs, (hotDogs) => hotDogs.hotDogs);
