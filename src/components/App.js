import React from "react";
import Login from "./Login";
import Dashbord from "./Dashbord";
import useLocalStorage from "../hooks/useLocalStorage";


function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    id ? <Dashbord id={id}/> : <Login onIdSubmit={setId}/>
  );
}

export default App;
