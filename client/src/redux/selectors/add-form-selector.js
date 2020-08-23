import { createSelector } from 'reselect';
import { ADD_FORM_KEY } from '../constants';

const addForm = (state) => state[ADD_FORM_KEY];

export const addFormSelector = createSelector(addForm, (addForm) => addForm.isVisibleAddForm);
