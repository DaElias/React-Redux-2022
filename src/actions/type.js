/** Import funciions */
import { getAll } from "../services/notes";
/** Typos de asiganciones */
export const SET_PERSONAJES = "@PERONS/SET_PERSONAJES";
export const DELETE_PERONAJE = "@PERONS/DELETE_PERONAJE";
export const GET_PERSONAJE = "@PERONS/GET_PERSONAJE";
export const SET_PERSON = "@PERONS/SET_PERSON";
export const EDIT_PERSON = "@PERONS/EDIT_PERSON";
export const EMPTY_LIST = "@PERONS/EMPTY_LIST";
export const ADD_REGISTER_DATA = "@NOTE/ADD_REGISTER_DATA";
export const ADD_TODOPERSONAJES = "@STARWARS/ADD_TODOPERSONAJES";
export const ADD_PERSONAJES = "@STARWARS/ADD_PERSONAJES";
export const ADD_NOTES = "@NOTES/ADD_NOTES";
export const ADD_NOTE = "@NOTE/ADD_NOTE";
export const DELETE_NOTE = "@NOTE/DELETE_NOTE";
export const DELETE_ALL_NOTE = "@NOTE/DELETE_ALL_NOTE";
export const EDIT_NOTE_ID = "@NOTE/EDIT_NOTE_ID";

/** Typos de funciones */
export const setPersonajes = (payload) => ({ type: SET_PERSONAJES, payload });
export const deletePersonaje = (payload) => ({
  type: DELETE_PERONAJE,
  payload,
});
export const setPerson = (payload) => ({ type: SET_PERSON, payload });
export const editPerson = (payload) => ({ type: EDIT_PERSON, payload });
export const emptyList = () => ({ type: EMPTY_LIST });
export const addRegisterData = (payload) => ({
  type: ADD_REGISTER_DATA,
  payload,
});
export const addTodoPersonajes = (payload) => ({
  type: ADD_TODOPERSONAJES,
  payload,
});
export const addPersonajes = (payload) => ({ type: ADD_PERSONAJES, payload });
//* Notes
export const addNotes = () => async (dispatch) => {
  const notes = await getAll(); //* notas
  dispatch({
    type: ADD_NOTES,
    payload: notes,
  });
};
export const addNote = (payload) => ({ type: ADD_NOTE, payload });
export const deleteNote = (payload) => ({ type: DELETE_NOTE, payload });
export const deleteAllNote = (payload) => ({ type: DELETE_ALL_NOTE, payload });
export const editNoteId = (id) => ({ type: EDIT_NOTE_ID, payload: { id } });
