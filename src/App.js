import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [radioLable, setradioLable] = useState("Set Dark Mode")
  const [alert, setAlert] = useState(null)
  function showAlert(type, messege) {
    setAlert({
      messege: messege,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setradioLable("Set Light Mode")
      document.body.style.backgroundColor = "gray"
      showAlert("success : ", "Dark Mode Has Been Enable")
    } else {
      setMode("light")
      setradioLable("Set Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("success : ", "Light Mode Has Been Enable")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="First App" mode={mode} toggleMode={toggleMode} radioLable={radioLable} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
        <Form heading="Play With Text" mode={mode} />

          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
