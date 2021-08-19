
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(()=>{
    setAlert(null);
  }, 2000)

  let switchMode = ()=>{
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
      <Navbar title="TextUtils" about="About Us" mode={mode} switchMode={switchMode} />
      <Alert alert={alert}/>
      <TextForm heading="Enter the text here" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
