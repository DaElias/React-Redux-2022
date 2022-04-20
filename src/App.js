import { useDispatch } from "react-redux";
import Home from "./containers/Home";
import Notes from "./containers/Notes";
import { useEffect } from "react";
import { getAll } from "./services/notes";
import { addNotes } from "./actions/type";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //* cuando inicia la app se cargan los datos
    dispatch(addNotes());
  }, []);

  return (
    <>
      <Home />
      <Notes /> {/* <MostrarCapitulos /> */}
    </>
  );
}

export default App;
