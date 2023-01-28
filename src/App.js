// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// let name = "Prateek";
function App() {
  //  Whether dark mode is enable or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
   
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled  ",  "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled  ",  "success");
    }
  }
  return (
    <>
    
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
{/* <Navbar /> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter The text to analyze below"  mode={mode}/>
  {/* <About/> */}
</div>
</>
  );
}

export default App;
