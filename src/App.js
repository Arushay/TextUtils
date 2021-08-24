
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// react router import
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000)



  // switch black/wite  mode
  let switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3436";
      showAlert("Dark mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled.", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About Us" mode={mode} switchMode={switchMode}  />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
           {/* <Route exact path="/"> */}
            <TextForm heading="TextUtils - word counter" mode={mode} />
          {/* </Route>
        </Switch> */}
      {/*  </Router> */}
    </>
  );
}

export default App;
