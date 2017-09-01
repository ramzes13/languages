import Connection from '../helpers/connection';

const conn = new Connection();

export const DICTATION_CRUD_CREATE = 'DICTATION_CRUD_CREATE';
export const DICTATION_CRUD_SAVE = 'DICTATION_CRUD_SAVE';
export const DICTATION_CRUD_SAVE_DONE = 'DICTATION_CRUD_SAVE_DONE';
export const DICTATION_CRUD_EDIT = 'DICTATION_CRUD_EDIT';
export const DICTATION_CRUD_EDIT_SHOW = 'DICTATION_CRUD_EDIT_SHOW';

export function dictationCrudCreate() {
  return {
    type: DICTATION_CRUD_CREATE,
  };
}

export function dictationCrudSave() {
  return function (dispatch) {
    dispatch({
      type: DICTATION_CRUD_SAVE,
    });

    conn.getGameList().then((entity) => {
      dispatch({
        type: DICTATION_CRUD_SAVE_DONE,
        entity,
      });
    });
  };
}

export function dictationCrudDisplayEdit() {
  return function (dispatch) {
    dispatch({
      type: DICTATION_CRUD_EDIT,
    });

    conn.getentity().then((entity) => {
      dispatch({
        type: DICTATION_CRUD_EDIT_SHOW,
        entity,
      });
    });
  };
}
