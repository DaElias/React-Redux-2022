import personajesReducer from "./reducer/personajesReducer.js";
import registerReducer from "./reducer/registerReducer.js";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Home from "./containers/Home";
//* creacion del contexto global

const reducer = combineReducers({
  personajes: personajesReducer,
  registros: registerReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
