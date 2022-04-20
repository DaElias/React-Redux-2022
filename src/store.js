import personajesReducer from "./reducer/personajesReducer.js";
import registerReducer from "./reducer/registerReducer.js";
// import StarWarsReducer from "./reducer/StarWarsReducer.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import MostrarCapitulos from "./containers/MostrarCapitulos.js";
import notesReducer from "./reducer/notesReducer.js";
//* creacion del contexto global
import thunk from "redux-thunk";

const reducer = combineReducers({
  personajes: personajesReducer,
  registros: registerReducer,
  // starWars: StarWarsReducer,
  notes: notesReducer,
});

export const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__
  // ? window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
  // : applyMiddleware(thunk)
  applyMiddleware(thunk)
);
