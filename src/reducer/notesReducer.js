import {
  ADD_NOTE,
  ADD_PERSONAJES,
  ADD_NOTES,
  DELETE_ALL_NOTE,
  EDIT_NOTE_ID,
} from "../actions/type";
const initialState = {
  notes: [],
  favorite: [],
};
const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NOTES:
      return { ...state, notes: payload };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case ADD_PERSONAJES:
      return { ...state };
    case DELETE_ALL_NOTE:
      return { ...state };
    case EDIT_NOTE_ID:
      // * payload = {id}
      return {
        ...state,
        notes: state.notes.map((nota) => {
          if (nota.id === payload.id) return { ...nota, state: !nota.state };
          return { ...nota };
        }),
      };
    default:
      return { ...state };
  }
};

export default notesReducer;
