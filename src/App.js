import personajesReducer from "./reducer/personajesReducer.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ShowPersonajes from "./components/ShowPersonajes";

//* creacion del contexto global
const store = createStore(
  personajesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Provider store={store}>
        <ShowPersonajes />
      </Provider>
    </>
  );
}

export default App;
