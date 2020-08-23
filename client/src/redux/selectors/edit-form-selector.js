import { createSelector } from 'reselect';
import { EDIT_FORM_KEY } from '../constants';

const editForm = (state) => state[EDIT_FORM_KEY];

export const editFormSelector = createSelector(editForm, (editForm) => editForm.isVisibleEditForm);
