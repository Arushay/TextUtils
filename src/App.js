
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <TextForm heading="Enter the text here" />
      {/* <About /> */}
    </>
  );
}

export default App;
