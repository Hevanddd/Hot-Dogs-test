import { allHotDogsReducer } from './all-hot-dogs-reducer';
import { addFormReducer } from './add-form-reducer'
import { editFormReducer } from './edit-form-reducer'
import { loadingReducer } from './loading-reducer';

import { HOT_DOGS_KEY, ADD_FORM_KEY, EDIT_FORM_KEY , LOADING_KEY} from '../constants';

const reducers = {
  [HOT_DOGS_KEY]: allHotDogsReducer,
  [ADD_FORM_KEY]: addFormReducer,
  [EDIT_FORM_KEY]: editFormReducer,
  [LOADING_KEY]: loadingReducer,
};

export const getReducers = () => ({ ...reducers });