import { createSelector } from 'reselect';
import { LOADING_KEY } from '../constants';

const getLoadingStatus = (state) => state[LOADING_KEY];

export const loadingStatusSelector = createSelector(getLoadingStatus, (loading) => loading.isLoading);