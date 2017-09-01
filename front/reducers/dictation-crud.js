import { Map } from 'immutable';

import {
  DICTATION_CRUD_CREATE,
  DICTATION_CRUD_SAVE,
  DICTATION_CRUD_SAVE_DONE,
  DICTATION_CRUD_EDIT,
  DICTATION_CRUD_EDIT_SHOW,
} from '../actions/dictation-crud';

const initialState = Map({
  'action': null,
  'entity': null,
});

const actionsMap = {
  [DICTATION_CRUD_CREATE]: (state) => {
    return state.merge(Map({
      state: DICTATION_CRUD_CREATE,
    }));
  },
  [DICTATION_CRUD_SAVE]: (state) => {
    return state.merge(Map({
      state: DICTATION_CRUD_CREATE,
    }));
  },
  [DICTATION_CRUD_SAVE_DONE]: (state, action) => {
    return state.merge(Map({
      state: DICTATION_CRUD_EDIT_SHOW,
      entity: action.entity,
    }));
  },
  [DICTATION_CRUD_EDIT]: (state) => {
    return state.merge(Map({
      state: DICTATION_CRUD_EDIT,
    }));
  },
  [DICTATION_CRUD_EDIT_SHOW]: (state, action) => {
    return state.merge(Map({
      state: DICTATION_CRUD_EDIT,
      entity: action.entity,
    }));
  },
};


export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
